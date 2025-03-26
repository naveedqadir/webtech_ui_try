import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, MeshWobbleMaterial, useTexture, SpotLight } from "@react-three/drei";
import * as THREE from 'three';

const colors = {
  primary: '#8b5cf6',    // Purple
  secondary: '#3b82f6',  // Blue
  accent: '#ec4899'      // Pink
};

export function AdvancedShape({ color = colors.primary }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Dynamic distortion based on audio or time
      const distortFactor = Math.sin(state.clock.elapsedTime) * 0.1 + 0.3;
      
      if (meshRef.current.material) {
        (meshRef.current.material as any).distort = hovered ? 0.6 : distortFactor;
      }
    }
  });

  return (
    <group>
      <TorusKnot 
        ref={meshRef} 
        args={[1, 0.3, 256, 32, 3, 7]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.3}
          radius={1}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </TorusKnot>
      
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

export function GradientSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  
  // Load Earth textures
  const [earthMap, earthNormalMap, earthSpecularMap, cloudsMap] = useTexture([
    '/earth_daymap.jpg',
    '/earth_normal_map.jpg',
    '/earth_specular_map.jpg',
    '/earth_clouds.jpg'
  ]);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Slow rotation to simulate Earth spinning
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    
    if (cloudsRef.current) {
      // Clouds rotate slightly faster than the Earth
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.055;
    }
  });

  return (
    <group>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.25} />
      
      {/* Main sunlight - enhanced */}
      <directionalLight 
        ref={lightRef}
        position={[5, 3, 5]} 
        intensity={2.5} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
        color="#FFF6E5"
      />
      
      {/* Secondary sun rim light */}
      <directionalLight
        position={[4, 2, 4]}
        intensity={1.2}
        color="#FFE0B2"
      />
      
      {/* Enhanced sun glow effect */}
      <group position={[5, 3, 5]}>
        {/* Bright core */}
        <pointLight intensity={2.5} distance={25} decay={2} color="#FFFFFF" />
        
        {/* Sun core with animation */}
        <mesh>
          <sphereGeometry args={[0.2, 32, 32]} />
          <MeshWobbleMaterial 
            color="#FFFFFF" 
            factor={0.15}
            speed={0.5}
            emissive="#FFFFFF"
            emissiveIntensity={1.2}
          />
        </mesh>
        
        {/* Inner corona */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshWobbleMaterial 
            color="#FFF9C4" 
            factor={0.2}
            speed={0.3}
            transparent 
            opacity={0.8} 
            emissive="#FFF176"
            emissiveIntensity={0.8}
          />
        </mesh>
        
        {/* Middle corona layer */}
        <mesh>
          <sphereGeometry args={[0.7, 28, 28]} />
          <MeshWobbleMaterial
            color="#FFEE58"
            factor={0.3}
            speed={0.2}
            transparent
            opacity={0.5}
            emissive="#FFD54F"
            emissiveIntensity={0.6}
          />
        </mesh>
        
        {/* Outer glow */}
        <mesh>
          <sphereGeometry args={[1.0, 24, 24]} />
          <MeshWobbleMaterial
            color="#FFCA28"
            factor={0.4}
            speed={0.15}
            transparent
            opacity={0.3}
            emissive="#FFB300"
            emissiveIntensity={0.4}
          />
        </mesh>
        
        {/* Distant halo effect */}
        <mesh>
          <sphereGeometry args={[1.5, 20, 20]} />
          <meshBasicMaterial
            color="#FFE082"
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </mesh>
        
        {/* Lens flare effect */}
        <SpotLight
          distance={15}
          angle={0.5}
          attenuation={5}
          anglePower={5}
          intensity={2}
          color="#FFF8E1"
          position={[0, 0, 0]}
          target-position={[-5, -3, -5]}
        />
      </group>
      
      {/* Space background light enhancement */}
      <ambientLight color="#000020" intensity={0.05} />
      
      {/* Earth sphere with improved material */}
      <mesh ref={meshRef} scale={2} receiveShadow castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          map={earthMap}
          normalMap={earthNormalMap}
          metalnessMap={earthSpecularMap}
          metalness={0.2}
          roughness={0.7}
          emissiveMap={earthMap}
          emissiveIntensity={0.15}
          emissive={new THREE.Color("#3b3f45")}
          clearcoat={0.2}
          clearcoatRoughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Cloud layer */}
      <mesh ref={cloudsRef} scale={2.02} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.45}
          depthWrite={false}
          roughness={0.3}
          transmission={0.1}
        />
      </mesh>
      
      {/* Atmosphere glow - enhanced */}
      <mesh scale={2.1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#64B5F6"
          transparent={true}
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Additional atmosphere rim highlight */}
      <mesh scale={2.15}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#E3F2FD"
          transparent={true}
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
