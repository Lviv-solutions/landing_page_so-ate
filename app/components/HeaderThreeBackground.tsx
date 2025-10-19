"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

function AITorusInterface() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader material for AI-like effects
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uNoiseScale: { value: 0.5 },
        uPrimaryColor: { value: new THREE.Color("#f9dcc7") },
        uSecondaryColor: { value: new THREE.Color("#966192") },
        uOpacity: { value: 0.8 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uNoiseScale;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        // Simplex noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          vUv = uv;
          vNormal = normal;
          
          // Apply noise displacement
          float noise = snoise(position * uNoiseScale + uTime * 0.5) * 0.1;
          vec3 newPosition = position + normal * noise;
          
          vPosition = newPosition;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uPrimaryColor;
        uniform vec3 uSecondaryColor;
        uniform float uOpacity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Create AI-like grid pattern
          vec2 grid = abs(fract(vUv * 20.0) - 0.5);
          float gridPattern = smoothstep(0.0, 0.1, min(grid.x, grid.y));
          
          // Animated color mixing
          float colorMix = sin(vPosition.x * 2.0 + uTime) * 0.5 + 0.5;
          vec3 color = mix(uPrimaryColor, uSecondaryColor, colorMix);
          
          // Add fresnel effect
          float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.0);
          color += fresnel * 0.3;
          
          // Combine with grid
          color = mix(color * 0.3, color, gridPattern);
          
          // Add pulsing effect
          float pulse = sin(uTime * 3.0) * 0.1 + 0.9;
          
          gl_FragColor = vec4(color * pulse, uOpacity * gridPattern);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Rotate the torus
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.003;

      // Update shader uniforms
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

      // Dynamic noise scaling
      materialRef.current.uniforms.uNoiseScale.value =
        0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <torusGeometry args={[1.2, 0.4, 32, 100]} />
      <primitive object={shaderMaterial} ref={materialRef} />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const noise3D = createNoise3D();

  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        // Apply noise-based movement
        const noiseX =
          noise3D(
            x * 0.01,
            y * 0.01,
            z * 0.01 + state.clock.elapsedTime * 0.1,
          ) * 0.02;
        const noiseY =
          noise3D(
            x * 0.01 + 100,
            y * 0.01,
            z * 0.01 + state.clock.elapsedTime * 0.1,
          ) * 0.02;
        const noiseZ =
          noise3D(
            x * 0.01,
            y * 0.01 + 100,
            z * 0.01 + state.clock.elapsedTime * 0.1,
          ) * 0.02;

        positions[i3] += noiseX;
        positions[i3 + 1] += noiseY;
        positions[i3 + 2] += noiseZ;

        // Boundary wrapping
        if (Math.abs(positions[i3]) > 4) positions[i3] *= -0.8;
        if (Math.abs(positions[i3 + 1]) > 2) positions[i3 + 1] *= -0.8;
        if (Math.abs(positions[i3 + 2]) > 2) positions[i3 + 2] *= -0.8;
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#966192"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function AIEnergyRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.5;
      ring1Ref.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.3;
      ring2Ref.current.scale.setScalar(1 + Math.cos(time * 1.5) * 0.15);
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.7;
      ring3Ref.current.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -1]}>
        <ringGeometry args={[2, 2.1, 64]} />
        <meshBasicMaterial color="#f9dcc7" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, -0.5]}>
        <ringGeometry args={[1.5, 1.6, 64]} />
        <meshBasicMaterial color="#966192" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, 0]}>
        <ringGeometry args={[1, 1.05, 64]} />
        <meshBasicMaterial color="#31241A" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export default function HeaderThreeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <AITorusInterface />
          <FloatingParticles />
          <AIEnergyRings />
        </Suspense>
      </Canvas>
    </div>
  );
}
