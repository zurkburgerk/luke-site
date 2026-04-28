import { ProjectGrid } from '@/components/ProjectGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luke Rathunde | Product Design',
  description: 'Product design portfolio showcasing innovative 3D printed designs.',
}

export default function HomePage() {
  return (
    <div className="home">
      <ProjectGrid />
    </div>
  )
}