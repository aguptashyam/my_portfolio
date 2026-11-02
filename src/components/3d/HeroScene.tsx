"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const accentColor = new THREE.Color("#6366f1");
    const secondaryColor = new THREE.Color("#818cf8");
    const dimColor = new THREE.Color("#3f3f46");
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color = t < 0.15 ? accentColor : t < 0.3 ? secondaryColor : dimColor;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    ref.current.rotation.y = time * 0.03;
    ref.current.rotation.x = Math.sin(time * 0.02) * 0.1;

    // Subtle mouse influence
    const targetRotX = mousePosition.y * 0.0003;
    const targetRotZ = mousePosition.x * 0.0003;
    ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * 0.02;
    ref.current.rotation.z += (targetRotZ - ref.current.rotation.z) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}



function OrbitalRing({ radius, speed, color, opacity }: {
  radius: number;
  speed: number;
  color: string;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(time * speed * 0.5) * 0.1;
    ref.current.rotation.y = time * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}



function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
    </mesh>
  );
}



function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.1) * 0.3;
    camera.position.y = Math.cos(time * 0.08) * 0.2;
    camera.lookAt(0, 0, 0);
  });

  return null;
}



function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#6366f1" />
      <ParticleField mousePosition={mousePosition} />
      <CoreSphere />
      <OrbitalRing radius={2.5} speed={0.15} color="#6366f1" opacity={0.15} />
      <OrbitalRing radius={3.5} speed={-0.1} color="#818cf8" opacity={0.08} />
      <OrbitalRing radius={4.2} speed={0.08} color="#4f46e5" opacity={0.05} />
    </>
  );
}



export default function HeroScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setIsWebGLSupported(false);
    } catch {
      setIsWebGLSupported(false);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  if (!isWebGLSupported) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-dark)]/3 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
