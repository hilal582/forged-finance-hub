import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

// Enhanced logo component with better materials and lighting response
const ForgedFinanceLogo = ({ rotationX, mousePosition }: { rotationX: number; mousePosition: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/forged-finance-logo.glb');
  
  useEffect(() => {
    if (scene) {
      // Apply premium metallic material
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: '#ffffff',
            metalness: 0.9,
            roughness: 0.1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 1.0,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse interaction
      groupRef.current.rotation.y += (mousePosition.x * 0.1 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (mousePosition.y * 0.1 - groupRef.current.rotation.x) * 0.05;
    }
  });

  if (!scene) {
    // Enhanced fallback geometric logo
    return (
      <group ref={groupRef}>
        {/* Main structure */}
        <mesh>
          <torusGeometry args={[1.5, 0.2, 16, 100]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.9} 
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Center element */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.95} 
            roughness={0.05}
            clearcoat={1.0}
          />
        </mesh>
        
        {/* Surrounding elements */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (Math.PI / 3) * i;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8]}
              rotation={[0, angle, 0]}
            >
              <boxGeometry args={[0.1, 1.5, 0.1]} />
              <meshPhysicalMaterial 
                color="#ffffff" 
                metalness={0.9} 
                roughness={0.1}
                clearcoat={1.0}
              />
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

export const Logo3D = ({ scrollY, mousePosition }: Logo3DProps) => {
  // Calculate scroll progress
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  
  // Position calculations for smooth transition
  const startX = 65; // Start on the right side
  const startY = 50; // Center vertically
  const endX = 35;   // Move to left side
  const endY = 50;   // Stay centered
  
  const currentX = startX + (endX - startX) * scrollProgress;
  const currentY = startY + (endY - startY) * scrollProgress;
  
  // Size scaling
  const startSize = window.innerWidth < 768 ? 300 : 400;
  const endSize = window.innerWidth < 768 ? 250 : 350;
  const currentSize = startSize + (endSize - startSize) * scrollProgress;
  
  // Backflip rotation
  const rotationX = scrollProgress * Math.PI * 2;
  
  // Determine if we're in the second section for special effects
  const isInSecondSection = scrollProgress > 0.7;

  return (
    <div 
      className="fixed z-30 pointer-events-none"
      style={{
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: 'translate(-50%, -50%)',
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        transition: scrollY === 0 ? 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
      }}
    >
      {/* Engraved wall effect background */}
      {isInSecondSection && (
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at center, 
                rgba(0,0,0,0.9) 0%, 
                rgba(0,0,0,0.95) 60%, 
                rgba(0,0,0,1) 80%
              )
            `,
            boxShadow: `
              inset 0 0 100px rgba(0,0,0,0.9),
              inset 0 0 200px rgba(0,0,0,0.8),
              0 0 100px rgba(255,255,255,0.1),
              0 0 200px rgba(255,255,255,0.05)
            `,
            transform: 'scale(1.4)',
            zIndex: -2,
            filter: 'blur(1px)'
          }}
        />
      )}

      <Canvas 
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }} 
        shadows
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        {/* Enhanced lighting setup */}
        <ambientLight intensity={isInSecondSection ? 0.3 : 0.5} color="#ffffff" />
        
        {/* Key light */}
        <spotLight 
          position={[10, 10, 10]} 
          intensity={isInSecondSection ? 8 : 5} 
          angle={0.3} 
          penumbra={0.5} 
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill light */}
        <directionalLight 
          position={[-8, 6, 8]} 
          intensity={isInSecondSection ? 3 : 2} 
          color="#f8fafc"
        />
        
        {/* Rim light */}
        <directionalLight 
          position={[0, -8, -10]} 
          intensity={isInSecondSection ? 2 : 1.5} 
          color="#ffffff"
        />
        
        {/* Backlight for engraved effect */}
        {isInSecondSection && (
          <>
            <pointLight 
              position={[0, 0, -15]} 
              intensity={4} 
              color="#ffffff"
            />
            <pointLight 
              position={[5, 5, -10]} 
              intensity={2} 
              color="#e2e8f0"
            />
            <pointLight 
              position={[-5, -5, -10]} 
              intensity={2} 
              color="#e2e8f0"
            />
          </>
        )}
        
        {/* Logo with enhanced rotation and mouse interaction */}
        <ForgedFinanceLogo rotationX={rotationX} mousePosition={mousePosition} />
      </Canvas>
      
      {/* Backlit glow effect for engraved look */}
      {isInSecondSection && (
        <>
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
              filter: 'blur(30px)',
              transform: 'scale(1.8)',
              zIndex: -1
            }}
          />
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%)',
              filter: 'blur(15px)',
              transform: 'scale(1.3)',
              zIndex: -1
            }}
          />
        </>
      )}
    </div>
  );
};