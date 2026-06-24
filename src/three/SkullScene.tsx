import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type * as THREE from 'three';
import { ModelErrorBoundary } from './ModelErrorBoundary';
import { SkullFallback } from './SkullFallback';
import { SKULL_LAYERS } from '../data/skullLayers';
import { asset } from '../lib/asset';

function SkullModel({ activeLayer }: { activeLayer: number }) {
  const { scene } = useGLTF(asset('models/equine-skull.glb'));
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    SKULL_LAYERS.forEach((layer, i) => {
      if (!layer.meshName) return;
      const mesh = scene.getObjectByName(layer.meshName);
      if (mesh) mesh.visible = i <= activeLayer;
    });
  }, [scene, activeLayer]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export function SkullScene({ activeLayer }: { activeLayer: number }) {
  return (
    <div className="skull3d">
      <ModelErrorBoundary fallback={<SkullFallback activeLayer={activeLayer} />}>
        <Canvas camera={{ position: [0, 0.4, 3.2], fov: 34 }} dpr={[1, 2]}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 4, 3]} intensity={1.1} />
          <directionalLight position={[-3, 1, -2]} intensity={0.3} />
          <Suspense fallback={null}>
            <SkullModel activeLayer={activeLayer} />
          </Suspense>
        </Canvas>
      </ModelErrorBoundary>
    </div>
  );
}
