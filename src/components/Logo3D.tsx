import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ForgedFinanceLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useEffect(() => {
    if (scene) {
      // Apply white material to all meshes for sharpness and white color
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            metalness: 0.1,
            roughness: 0.2,
            emissive: '#ffffff',
            emissiveIntensity: 0.1,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slower rotation animation
      groupRef.current.rotation.y += 0.002;
    }
  });

  if (!scene) {
    return null;
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.8} />
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
        dpr={[1, 3]}
        camera={{ fov: 45, position: [0, 0, 5] }}
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