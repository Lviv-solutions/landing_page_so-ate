"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FooterStars() {
  const ref = useRef<THREE.Group>(null);

  // Generate random points for stars with footer-specific pattern
  const generateFooterPattern = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a more concentrated pattern at the bottom
      const x = (Math.random() - 0.5) * 4;
      const y = Math.random() * 2 - 1; // Bias towards bottom
      const z = (Math.random() - 0.5) * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  };

  const footerPattern = generateFooterPattern(2000);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20;
      ref.current.rotation.y += delta / 30;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={footerPattern} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#966192"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef1.current) {
      meshRef1.current.position.y = Math.sin(time * 0.5) * 0.3;
      meshRef1.current.rotation.x = time * 0.2;
      meshRef1.current.rotation.z = time * 0.1;
    }

    if (meshRef2.current) {
      meshRef2.current.position.y = Math.cos(time * 0.7) * 0.2;
      meshRef2.current.rotation.y = time * 0.3;
      meshRef2.current.rotation.x = time * 0.15;
    }

    if (meshRef3.current) {
      meshRef3.current.position.y = Math.sin(time * 0.3) * 0.25;
      meshRef3.current.rotation.z = time * 0.25;
      meshRef3.current.rotation.y = time * 0.1;
    }
  });

  return (
    <>
      {/* Floating Cube */}
      <mesh ref={meshRef1} position={[-2, 0, -3]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial
          color="#8B5261"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>

      {/* Floating Sphere */}
      <mesh ref={meshRef2} position={[2, 0, -2]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#966192" transparent opacity={0.15} />
      </mesh>

      {/* Floating Torus */}
      <mesh ref={meshRef3} position={[0, 0, -4]}>
        <torusGeometry args={[0.3, 0.1, 8, 16]} />
        <meshBasicMaterial
          color="#31241A"
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </>
  );
}

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;

      // Animate the geometry vertices for wave effect
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave =
          Math.sin(x * 2 + time) * 0.1 + Math.cos(y * 2 + time * 0.5) * 0.05;
        positions.setZ(i, wave);
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, -5]} rotation={[-Math.PI / 6, 0, 0]}>
      <planeGeometry args={[8, 2, 32, 8]} />
      <meshBasicMaterial color="#8B5261" transparent opacity={0.05} wireframe />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const generateParticleField = (count: number) => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread particles across the footer area
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

      // Alternate between brand colors
      const color =
        Math.random() > 0.5
          ? new THREE.Color("#8B5261")
          : new THREE.Color("#966192");
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  };

  const { positions, colors } = generateParticleField(1000);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function FooterThreeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <FooterStars />
          <FloatingGeometry />
          <WaveGeometry />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
