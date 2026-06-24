import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type * as THREE from 'three';
import { ModelErrorBoundary } from './ModelErrorBoundary';
import { Hotspot3D } from './Hotspot3D';
import { HOTSPOTS } from '../data/hotspots';
import { HorseFallback } from './HorseFallback';
import { asset } from '../lib/asset';

function HorseModel({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF(asset('models/horse.glb'));
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const breathe = Math.sin(state.clock.elapsedTime * 1.1) * 0.015;
    g.scale.setScalar(1 + breathe);
    const headSway = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    g.rotation.y = headSway + state.pointer.x * 0.2 - scrollProgress * 0.35;
    g.rotation.x = state.pointer.y * 0.05;
    g.position.y = -scrollProgress * 0.6;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
      {HOTSPOTS.map((h) => (
        <Hotspot3D key={h.id} hotspot={h} />
      ))}
    </group>
  );
}

interface HorseSceneProps {
  scrollProgress: number;
  parallaxY: number;
}

export function HorseScene({ scrollProgress, parallaxY }: HorseSceneProps) {
  return (
    <div className="hero3d">
      <ModelErrorBoundary fallback={<HorseFallback parallaxY={parallaxY} />}>
        <Canvas camera={{ position: [0, 1.3, 4.2], fov: 32 }} dpr={[1, 2]}>
          <ambientLight intensity={0.65} />
          <directionalLight position={[3, 5, 4]} intensity={1.1} />
          <directionalLight position={[-4, 2, -3]} intensity={0.35} />
          <Suspense fallback={null}>
            <HorseModel scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </ModelErrorBoundary>
    </div>
  );
}
