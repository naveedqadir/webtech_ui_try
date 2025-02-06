import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial } from "@react-three/drei";

export function AdvancedShape({ color }: { color: string }) {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]}>
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
          metalness={0.5}
          roughness={0.2}
        />
      </TorusKnot>
    </group>
  );
}
