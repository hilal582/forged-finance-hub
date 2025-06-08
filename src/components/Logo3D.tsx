import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Torus, Sphere, Cylinder, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  isScrolled: boolean;
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

export const Logo3D = ({ isScrolled }: Logo3DProps) => {
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setContainerSize({ width: 300, height: 300 });
      } else {
        setContainerSize({ width: 500, height: 500 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div 
      className={`
        fixed z-10 transition-all duration-700 ease-out
        ${isScrolled 
          ? 'top-8 right-8 w-24 h-24 md:w-32 md:h-32' 
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px]'
        }
      `}
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