"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../../../../components/Navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { useTranslation } from "../../../../hooks/useTranslation";
import { claimRequestService } from "../../../../../services/claimRequestService";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function CreateBusinessStep7() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasSubmittedRef = useRef(false);

  useEffect(() => {
    const handleRouteChange = () => {
      const newLocale = window.location.pathname.split("/")[1];
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router, locale]);

  useEffect(() => {
    const submitForm = async () => {
      // Prevent duplicate submissions using ref
      if (hasSubmittedRef.current) {
        return;
      }
      hasSubmittedRef.current = true;
      
      try {
        setIsSubmitting(true);
        setError(null);
        
        const formData = await businessFormDB.getFormData();
        
        if (!formData || !formData.arName) {
          router.push(`/${locale}/business/create/step1`);
          return;
        }

        // Get user ID from session/auth (you'll need to implement this)
        // For now, generating a valid UUID format
        // TODO: Replace with actual user ID from auth context
        const userId = crypto.randomUUID();

        // Prepare business data for claim request - only include defined values
        const businessData: any = {
          ar_name: formData.arName || "",
          en_name: formData.enName || "",
        };

        if (formData.arDescription) {
          businessData.ar_description = formData.arDescription;
        }
        
        if (formData.location) {
          businessData.address = `${formData.location.street || ""}, ${formData.location.city || ""}, ${formData.location.country || ""}`.trim();
        }
        
        if (formData.phoneNumber) {
          businessData.phone_number = formData.phoneNumber;
        }
        
        if (formData.email) {
          businessData.email = formData.email;
        }
        
        if (formData.categoryId) {
          businessData.category_id = parseInt(formData.categoryId);
        }
        
        if (formData.schedule && Object.keys(formData.schedule).length > 0) {
          businessData.working_hours = formData.schedule;
        }
        
        if (formData.keywords && formData.keywords.length > 0) {
          businessData.key_words = formData.keywords;
        }

        // Prepare evidence data - only include defined values
        const evidenceJson: any = {};
        
        if (formData.tableCount) {
          evidenceJson.tableCount = formData.tableCount;
        }
        
        if (formData.businessType) {
          evidenceJson.businessType = formData.businessType;
        }
        
        if (formData.location) {
          evidenceJson.location = {
            country: formData.location.country || "",
            city: formData.location.city || "",
            street: formData.location.street || "",
            postalCode: formData.location.postalCode || "",
            latitude: formData.location.latitude || "",
            longitude: formData.location.longitude || "",
          };
        }
        
        if (formData.alwaysOpen !== undefined) {
          evidenceJson.alwaysOpen = formData.alwaysOpen;
        }

        // Submit claim request
        const planCode = formData.planCode || 'free';
        console.log("Submitting claim with planCode:", planCode);
        
        const response = await claimRequestService.createClaimRequest({
          requesterId: userId,
          businessData,
          evidenceJson,
          planCode: planCode,
        });

        console.log("Claim request created:", response.claimRequestId, "with plan:", planCode);
        
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Clear the form data after successful submission
        await businessFormDB.clearFormData();
      } catch (error: any) {
        console.error("Failed to submit form:", error);
        setError(error.message || "Failed to submit claim request");
        setIsSubmitting(false);
      }
    };

    submitForm();
  }, [router, locale]);

  const handleGoHome = () => {
    router.push(`/${locale}`);
  };

  if (isSubmitting) {
    return (
      <div
        className="min-h-screen bg-white"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Navigation locale={locale} />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "calc(100vh - 200px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <CircularProgress size={60} sx={{ color: "#ED614A" }} />
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                }}
              >
                {t("businessForm.submitting")}
              </Typography>
            </Box>
          </Box>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen bg-white"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Navigation locale={locale} />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "calc(100vh - 200px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  bgcolor: "#FEE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "3rem" }}>❌</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                {t("businessForm.submissionError") || "حدث خطأ"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#637381",
                  maxWidth: "500px",
                }}
              >
                {error}
              </Typography>
              <Button
                variant="contained"
                onClick={() => router.push(`/${locale}/business/create/step1`)}
                sx={{
                  width: "300px",
                  height: "56px",
                  borderRadius: "8px",
                  backgroundColor: "#ED614A",
                  color: "white",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#D94F39",
                  },
                }}
              >
                {t("businessForm.tryAgain") || "حاول مرة أخرى"}
              </Button>
            </Box>
          </Box>
        </main>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <Box
            sx={{
              width: "712px",
              minHeight: "546px",
              borderRadius: "16px",
              border: "1px solid #E0E0E0",
              padding: "48px 24px",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "36px",
              opacity: 1,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: "300px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src="/assets/admin-console/success.png"
                alt="Success"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "600px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontSize: "2rem",
                }}
              >
                {t("businessForm.step7Title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#637381",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {t("businessForm.step7Subtitle")}
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={handleGoHome}
              sx={{
                width: "400px",
                height: "56px",
                minWidth: "64px",
                minHeight: "56px",
                borderRadius: "8px",
                padding: "12px 22px",
                backgroundColor: "#ED614A",
                color: "white",
                fontSize: "0.9375rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#D94F39",
                },
              }}
            >
              {t("businessForm.goToDashboard")}
            </Button>
          </Box>
        </Box>
      </main>
    </div>
  );
}
