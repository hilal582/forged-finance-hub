import { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

interface Logo3DProps {
  scrollY: number;
  isStatic?: boolean;
}

// Component to load and display the Forged Finance logo
const ForgedFinanceLogo = ({ isStatic = false }: { isStatic?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [gltf, setGltf] = useState<any>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/src/components/forged-finance-logo.glb',
      (loadedGltf) => {
        setGltf(loadedGltf);
        // Scale and position the model appropriately
        if (loadedGltf.scene) {
          loadedGltf.scene.scale.setScalar(2);
          loadedGltf.scene.position.set(0, 0, 0);
          
          // Apply metallic material to all meshes for luxury look
          loadedGltf.scene.traverse((child: any) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({
                color: '#ffffff',
                metalness: 0.95,
                roughness: 0.05,
                envMapIntensity: 1.5,
              });
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
        }
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );
  }, []);

  // No rotation for both versions as requested
  useFrame((state) => {
    if (groupRef.current && !isStatic) {
      // Very subtle floating animation only
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!gltf) {
    // Fallback geometric logo while loading
    return (
      <group ref={groupRef}>
        {/* Main ring */}
        <mesh castShadow receiveShadow>
          <torusGeometry args={[2, 0.4, 16, 100]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Center sphere */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
        </mesh>
        
        {/* Bars around the logo */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (Math.PI / 2) * i;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8]}
              rotation={[0, angle, Math.PI / 2]}
              castShadow
              receiveShadow
            >
              <cylinderGeometry args={[0.15, 0.15, 3.5, 32]} />
              <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
            </mesh>
          );
        })}
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export const Logo3D = ({ scrollY, isStatic = false }: Logo3DProps) => {
  if (isStatic) {
    // Static version for the second section
    return (
      <div className="w-full h-full">
        <Canvas 
          gl={{ alpha: true, antialias: true }} 
          shadows
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          
          {/* Enhanced lighting setup with spotlight from bottom */}
          <ambientLight intensity={0.3} />
          <spotLight
            position={[0, -5, 3]}
            angle={0.6}
            penumbra={0.3}
            intensity={3}
            castShadow
            shadow-mapSize={[2048, 2048]}
            target-position={[0, 0, 0]}
          />
          <directionalLight 
            position={[2, 2, 2]} 
            intensity={0.8} 
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-2, -2, 2]} intensity={0.5} />
          
          {/* Logo */}
          <ForgedFinanceLogo isStatic={true} />
        </Canvas>
      </div>
    );
  }

  // Calculate smooth position based on scroll with easing
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  const easedProgress = easeInOutCubic(scrollProgress);
  
  // Smooth interpolation for position - adjusted for better centering
  const centerX = 50; // 50% (center)
  const centerY = 35; // Moved down from 25% to 35% for better centering
  const targetX = window.innerWidth > 1024 ? 75 : 50; // 75% on desktop, center on mobile
  const targetY = 50; // 50% (center) when scrolled
  
  const currentX = centerX + (targetX - centerX) * easedProgress;
  const currentY = centerY + (targetY - centerY) * easedProgress;
  
  // Size interpolation - bigger logo as requested
  const initialSize = window.innerWidth < 768 ? 400 : 500;
  const targetSize = window.innerWidth < 768 ? 320 : 400;
  const currentSize = initialSize + (targetSize - initialSize) * easedProgress;

  return (
    <div 
      className="fixed z-10 transition-all duration-500 ease-out"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: 'translate(-50%, -50%)',
        width: `${currentSize}px`,
        height: `${currentSize}px`,
      }}
    >
      <Canvas 
        gl={{ alpha: true, antialias: true }} 
        shadows
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        {/* Enhanced lighting setup with spotlight from bottom to center */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[0, -6, 4]}
          angle={0.5}
          penumbra={0.2}
          intensity={4}
          castShadow
          shadow-mapSize={[2048, 2048]}
          target-position={[0, 0, 0]}
        />
        <directionalLight 
          position={[2, 2, 2]} 
          intensity={1} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-2, -2, -2]} intensity={0.6} />
        <pointLight position={[0, 0, 5]} intensity={0.8} />
        
        {/* Logo */}
        <ForgedFinanceLogo />
      </Canvas>
    </div>
  );
};