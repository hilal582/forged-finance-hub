import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const ForgedFinanceLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation animation
      groupRef.current.rotation.y += 0.005;
    }
  });

  if (!scene) {
    return null;
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
};

export const Logo3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }} 
        shadows
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          color="#ffffff"
          castShadow
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={0.5} 
          color="#f8fafc"
        />
        
        <ForgedFinanceLogo />
      </Canvas>
    </div>
  );
};