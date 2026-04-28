'use client'

import { Canvas } from '@react-three/fiber'
import AnimatedModel from './AnimatedModel'
import { Suspense } from 'react'

export type ModelCanvasProps = {
  url: string
  transition?: 'fromRight' | 'fromLeft'
  fadeIn?: boolean
  autoRotate?: boolean
  trackMouse?: boolean
  height?: number | string
}

export default function ModelCanvas({
  url,
  transition,
  fadeIn = false,
  autoRotate = false,
  trackMouse = false,
  height = 400,
}: ModelCanvasProps) {
  const heightValue = typeof height === 'number' ? `${height}px` : height

  return (
    <div style={{ height: heightValue, width: '100%' }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[5, 10, 5]} intensity={4} castShadow={false} />
        <directionalLight position={[-5, 5, -5]} intensity={2} />
        <Suspense fallback={null}>
          {url && (
            <AnimatedModel
              url={url}
              fadeIn={fadeIn}
              mouseTrackX={trackMouse}
              mouseTrackY={trackMouse}
              autoRotate={autoRotate}
              transition={transition}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}