import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  scrollY: number;
}

// Component to load and display the Forged Finance logo
const ForgedFinanceLogo = ({ rotationX }: { rotationX: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useEffect(() => {
    if (scene) {
      // Apply pure white material with proper lighting response
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: '#ffffff',
            shininess: 100,
            specular: '#ffffff',
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    // Keep static for premium look
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
    <group ref={groupRef} rotation={[rotationX, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export const Logo3D = ({ scrollY }: Logo3DProps) => {
  // Calculate smooth position based on scroll
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  
  // Smooth interpolation for position
  const centerX = 50; // 50% (center)
  const centerY = 30; // 30% from top for better spacing with text
  const targetX = window.innerWidth > 1024 ? 75 : 50; // 75% on desktop, center on mobile
  const targetY = 50; // 50% (center) when scrolled
  
  const currentX = centerX + (targetX - centerX) * scrollProgress;
  const currentY = centerY + (targetY - centerY) * scrollProgress;
  
  // Responsive size
  const currentSize = window.innerWidth < 768 ? 400 : window.innerWidth < 1024 ? 500 : 600;
  
  // Smooth backflip rotation during scroll
  const rotationX = scrollProgress * Math.PI * 2 * (1 - Math.pow(1 - scrollProgress, 3));

  // Calculate if we're in second section for engraved effect
  const isInSecondSection = scrollProgress > 0.5;
  
  return (
    <div 
      className="fixed z-40"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: 'translate(-50%, -50%)',
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        transition: scrollY === 0 ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
      }}
    >
      {/* Engraved effect background when in second section */}
      {isInSecondSection && (
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at center, 
                rgba(0,0,0,0.8) 0%, 
                rgba(0,0,0,0.9) 40%, 
                rgba(0,0,0,1) 70%
              ),
              radial-gradient(circle at center, 
                rgba(255,255,255,0.1) 0%, 
                transparent 50%
              )
            `,
            boxShadow: `
              inset 0 0 100px rgba(0,0,0,0.8),
              inset 0 0 50px rgba(0,0,0,0.9),
              0 0 100px rgba(255,255,255,0.1)
            `,
            transform: 'scale(1.2)',
            zIndex: -1
          }}
        />
      )}
      
      <Canvas gl={{ alpha: true, antialias: true }} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Enhanced lighting for engraved effect */}
        <ambientLight intensity={isInSecondSection ? 0.2 : 0.4} color="#ffffff" />
        
        {/* Key light - main spotlight */}
        <spotLight 
          position={[8, 12, 8]} 
          intensity={isInSecondSection ? 6 : 4} 
          angle={0.4} 
          penumbra={0.4} 
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill light - softer from opposite side */}
        <directionalLight 
          position={[-6, 8, 6]} 
          intensity={isInSecondSection ? 2 : 1.5} 
          color="#f0f8ff"
        />
        
        {/* Rim light - for edge definition */}
        <directionalLight 
          position={[0, -5, -8]} 
          intensity={isInSecondSection ? 1.5 : 1} 
          color="#ffffff"
        />
        
        {/* Top light for depth */}
        <directionalLight 
          position={[0, 15, 0]} 
          intensity={isInSecondSection ? 1.8 : 1.2} 
          color="#ffffff"
        />
        
        {/* Backlight for engraved effect */}
        {isInSecondSection && (
          <pointLight 
            position={[0, 0, -10]} 
            intensity={2} 
            color="#ffffff"
          />
        )}
        
        {/* Logo with rotation */}
        <ForgedFinanceLogo rotationX={rotationX} />
      </Canvas>
      
      {/* Backlit glow effect when engraved */}
      {isInSecondSection && (
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'scale(1.5)',
            zIndex: -2
          }}
        />
      )}
    </div>
  );
};