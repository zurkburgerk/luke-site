'use client'

import { Canvas } from '@react-three/fiber'
import AnimatedModel from '@/components/Model/AnimatedModel'
import { Suspense } from 'react'

type Props = {
  url: string
  height?: number
}

export function ModelPreview({ url, height = 300 }: Props) {
  if (!url) return null

  return (
    <div className="model-preview" style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[5, 10, 5]} intensity={4} />
        <directionalLight position={[-5, 5, -5]} intensity={2} />
        <Suspense fallback={null}>
          <AnimatedModel url={url} autoRotate fadeIn mouseTrackX />
        </Suspense>
      </Canvas>
    </div>
  )
}
