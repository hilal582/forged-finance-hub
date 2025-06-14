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
      // Apply black material with proper lighting response for futuristic look
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhongMaterial({
            color: '#000000',
            shininess: 100,
            specular: '#ffffff',
            emissive: '#001122', // Subtle blue glow
          });
          child.castShadow = true;
          child.receiveShadow = true;
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
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} emissive="#001122" />
        </mesh>
        
        {/* Center sphere */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#000000" metalness={0.95} roughness={0.05} emissive="#001122" />
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
              <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} emissive="#001122" />
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
  const centerY = 25; // 25% from top for better spacing with text
  const targetX = window.innerWidth > 1024 ? 75 : 50; // 75% on desktop, center on mobile
  const targetY = 50; // 50% (center) when scrolled
  
  const currentX = centerX + (targetX - centerX) * scrollProgress;
  const currentY = centerY + (targetY - centerY) * scrollProgress;
  
  // Keep consistent larger size throughout both sections
  const currentSize = window.innerWidth < 768 ? 650 : 900;
  
  // Smooth backflip rotation during scroll
  const rotationX = scrollProgress * Math.PI * 2 * (1 - Math.pow(1 - scrollProgress, 3)); // Smooth easing

  return (
    <div 
      className="fixed z-50"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: 'translate(-50%, -50%)',
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        transition: scrollY === 0 ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
      }}
    >
      <Canvas gl={{ alpha: true, antialias: true }} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Futuristic lighting setup for black logo with backlighting */}
        <ambientLight intensity={0.2} color="#ffffff" />
        
        {/* Strong backlight - creates rim lighting effect */}
        <directionalLight 
          position={[0, 0, -10]} 
          intensity={3} 
          color="#00aaff"
        />
        
        {/* Side backlights for depth */}
        <directionalLight 
          position={[-8, 0, -6]} 
          intensity={2} 
          color="#0077cc"
        />
        
        <directionalLight 
          position={[8, 0, -6]} 
          intensity={2} 
          color="#0077cc"
        />
        
        {/* Top backlight */}
        <directionalLight 
          position={[0, 10, -5]} 
          intensity={2.5} 
          color="#0099dd"
        />
        
        {/* Subtle front light to define edges */}
        <directionalLight 
          position={[0, 0, 10]} 
          intensity={0.5} 
          color="#ffffff"
        />
        
        {/* Point light for extra glow */}
        <pointLight 
          position={[0, 0, -8]} 
          intensity={3} 
          color="#00ccff"
          distance={20}
          decay={2}
        />
        
        {/* Logo with rotation */}
        <ForgedFinanceLogo rotationX={rotationX} />
      </Canvas>
    </div>
  );
};