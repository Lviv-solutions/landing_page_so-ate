#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${1:-landing-page-so-ate:latest}"
REPORT_DIR="security/reports"
FAIL=0

mkdir -p "$REPORT_DIR"

echo "========================================"
echo "  Security Scan: $IMAGE_NAME"
echo "========================================"
echo ""

# 1. Generate SBOM with Syft
echo "▶ [1/4] Generating SBOM with Syft..."
if syft "$IMAGE_NAME" \
  -o cyclonedx-json \
  > "$REPORT_DIR/sbom.cdx.json" 2>/dev/null; then
  echo "  ✓ SBOM generated: $REPORT_DIR/sbom.cdx.json"
else
  echo "  ✗ SBOM generation failed"
  exit 1
fi
echo ""

# 2. Scan SBOM with Grype
echo "▶ [2/4] Scanning SBOM with Grype..."
if grype "sbom:$REPORT_DIR/sbom.cdx.json" \
  --fail-on high \
  -o json \
  > "$REPORT_DIR/grype-report.json" 2>/dev/null; then
  echo "  ✓ Grype: No HIGH/CRITICAL vulnerabilities"
else
  echo "  ⚠ Grype: HIGH/CRITICAL vulnerabilities found"
  FAIL=1
fi
echo ""

# 3. Scan SBOM with Trivy
echo "▶ [3/4] Scanning SBOM with Trivy..."
if trivy sbom "$REPORT_DIR/sbom.cdx.json" \
  --severity HIGH,CRITICAL \
  --exit-code 1 \
  --format json \
  --output "$REPORT_DIR/trivy-sbom-report.json" 2>/dev/null; then
  echo "  ✓ Trivy SBOM: No HIGH/CRITICAL vulnerabilities"
else
  echo "  ⚠ Trivy SBOM: HIGH/CRITICAL vulnerabilities found"
  FAIL=1
fi
echo ""

# 4. Scan Docker image with Trivy (vuln + secrets + misconfig)
echo "▶ [4/4] Scanning Docker image with Trivy..."
if trivy image "$IMAGE_NAME" \
  --scanners vuln,secret,misconfig \
  --severity HIGH,CRITICAL \
  --exit-code 1 \
  --format json \
  --output "$REPORT_DIR/trivy-image-report.json" 2>/dev/null; then
  echo "  ✓ Trivy Image: No HIGH/CRITICAL issues"
else
  echo "  ⚠ Trivy Image: HIGH/CRITICAL issues found"
  FAIL=1
fi
echo ""

# Summary
echo "========================================"
echo "  Reports saved to: $REPORT_DIR/"
echo "========================================"
ls -lh "$REPORT_DIR/"
echo ""

if [ "$FAIL" -ne 0 ]; then
  echo "✗ SECURITY GATE FAILED: HIGH/CRITICAL issues detected."
  echo "  Review reports in $REPORT_DIR/ for details."
  exit 1
else
  echo "✓ SECURITY GATE PASSED: No HIGH/CRITICAL issues."
  exit 0
fi
