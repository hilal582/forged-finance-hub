import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  scrollY: number;
}

// Component to load and display the Forged Finance logo
const ForgedFinanceLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useEffect(() => {
    if (scene) {
      // Apply metallic material to all meshes for luxury look
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            metalness: 0.9,
            roughness: 0.1,
          });
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    // Remove rotation for premium static look
    // if (groupRef.current) {
    //   groupRef.current.rotation.y += 0.005;
    //   groupRef.current.rotation.x += 0.002;
    // }
  });

  if (!scene) {
    // Fallback geometric logo while loading
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
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

export const Logo3D = ({ scrollY }: Logo3DProps) => {
  // Calculate smooth position based on scroll
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  
  // Smooth interpolation for position
  const centerX = 50; // 50% (center)
  const centerY = 30; // 30% from top initially for better spacing
  const targetX = window.innerWidth > 1024 ? 75 : 50; // 75% on desktop, center on mobile
  const targetY = 50; // 50% (center) when scrolled
  
  const currentX = centerX + (targetX - centerX) * scrollProgress;
  const currentY = centerY + (targetY - centerY) * scrollProgress;
  
  // Size interpolation - larger for premium presence
  const initialSize = window.innerWidth < 768 ? 450 : 600;
  const targetSize = window.innerWidth < 768 ? 380 : 480;
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
        
        {/* Premium lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <directionalLight position={[0, 10, 0]} intensity={0.8} />
        <pointLight position={[0, 0, 10]} intensity={0.7} />
        <spotLight position={[10, 10, 10]} intensity={0.5} angle={0.3} penumbra={1} />
        
        {/* Logo */}
        <ForgedFinanceLogo />
      </Canvas>
    </div>
  );
};