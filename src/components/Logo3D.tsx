import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  scrollY: number;
}

// Temporary geometric logo component until user uploads their 3D model
const TemporaryLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main ring */}
      <mesh>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
      </mesh>
      
      {/* Bars around the logo */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (Math.PI / 2) * i;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 1.2, 0, Math.sin(angle) * 1.2]}
            rotation={[0, angle, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.1, 0.1, 2.5, 32]} />
            <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
};

export const Logo3D = ({ scrollY }: Logo3DProps) => {
  // Calculate smooth position based on scroll
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  
  // Smooth interpolation for position
  const centerX = 50; // 50% (center)
  const centerY = 25; // 25% from top initially
  const targetX = window.innerWidth > 1024 ? 75 : 50; // 75% on desktop, center on mobile
  const targetY = 50; // 50% (center) when scrolled
  
  const currentX = centerX + (targetX - centerX) * scrollProgress;
  const currentY = centerY + (targetY - centerY) * scrollProgress;
  
  // Size interpolation
  const initialSize = window.innerWidth < 768 ? 300 : 400;
  const targetSize = window.innerWidth < 768 ? 250 : 320;
  const currentSize = initialSize + (targetSize - initialSize) * scrollProgress;

  return (
    <div 
      className="fixed z-10"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: 'translate(-50%, -50%)',
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        transition: scrollY === 0 ? 'all 0.3s ease-out' : 'none'
      }}
    >
      <Canvas gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <directionalLight position={[-1, -1, -1]} intensity={0.5} />
        
        {/* Logo */}
        <TemporaryLogo />
      </Canvas>
    </div>
  );
};