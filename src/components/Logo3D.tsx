import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ForgedFinanceLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useEffect(() => {
    if (scene) {
      // Apply enhanced material with metallic finish for futuristic look
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            metalness: 0.8,
            roughness: 0.1,
            emissive: '#0066ff',
            emissiveIntensity: 0.05,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  if (!scene) {
    return null;
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.8} />
    </group>
  );
};

const DynamicLights = () => {
  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);
  const lightRef3 = useRef<THREE.PointLight>(null);
  const currentLightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate the colored lights in a circular motion
    if (lightRef1.current) {
      lightRef1.current.position.x = Math.cos(time * 0.8) * 8;
      lightRef1.current.position.z = Math.sin(time * 0.8) * 8;
      lightRef1.current.intensity = 3 + Math.sin(time * 2) * 0.5;
    }
    
    if (lightRef2.current) {
      lightRef2.current.position.x = Math.cos(time * 0.5 + Math.PI) * 6;
      lightRef2.current.position.z = Math.sin(time * 0.5 + Math.PI) * 6;
      lightRef2.current.intensity = 2.5 + Math.cos(time * 1.5) * 0.3;
    }
    
    if (lightRef3.current) {
      lightRef3.current.position.y = 8 + Math.sin(time * 1.2) * 2;
      lightRef3.current.intensity = 4 + Math.sin(time * 3) * 0.8;
    }
    
    // Persistent circular current light - starts from top and flows around
    if (currentLightRef.current) {
      const radius = 6;
      const speed = 1.2;
      currentLightRef.current.position.x = Math.cos(time * speed) * radius;
      currentLightRef.current.position.y = 1 + Math.sin(time * speed) * 2;
      currentLightRef.current.position.z = Math.sin(time * speed) * radius;
      // Keep high intensity for prominent current effect
      currentLightRef.current.intensity = 8;
    }
  });

  return (
    <>
      {/* Dynamic colored point lights */}
      <pointLight 
        ref={lightRef1}
        position={[8, 5, 8]} 
        intensity={3} 
        color="#00ffff"
        distance={20}
        decay={2}
      />
      
      <pointLight 
        ref={lightRef2}
        position={[-6, 3, 6]} 
        intensity={2.5} 
        color="#ff0080"
        distance={15}
        decay={2}
      />
      
      {/* Top dramatic light */}
      <pointLight 
        ref={lightRef3}
        position={[0, 10, 0]} 
        intensity={4} 
        color="#ffffff"
        distance={25}
        decay={1.5}
      />
      
      {/* Persistent current light - flows like electric current */}
      <pointLight 
        ref={currentLightRef}
        position={[0, 6, 4]} 
        intensity={8} 
        color="#ff3366"
        distance={18}
        decay={0.5}
      />
    </>
  );
};

export const Logo3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }} 
        shadows="soft"
        dpr={[1, 3]}
        camera={{ fov: 45, position: [0, 0, 5] }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* Dramatic Lighting Setup */}
        {/* Main ambient light - subtle */}
        <ambientLight intensity={0.2} color="#1a1a2e" />
        
        {/* Key light - bright white from front */}
        <directionalLight 
          position={[0, 8, 10]} 
          intensity={2.5} 
          color="#ffffff"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Rim light from behind - creates edge lighting */}
        <directionalLight 
          position={[0, 2, -10]} 
          intensity={3} 
          color="#00aaff"
        />
        
        {/* Dynamic lights component */}
        <DynamicLights />
        
        {/* Side accent lights */}
        <spotLight
          position={[15, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          color="#4400ff"
          target-position={[0, 0, 0]}
        />
        
        <spotLight
          position={[-15, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          color="#ff4400"
          target-position={[0, 0, 0]}
        />
        
        <ForgedFinanceLogo />
      </Canvas>
    </div>
  );
};