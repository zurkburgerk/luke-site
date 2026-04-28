import { getPayload } from 'payload'
import config from '@/payload.config'
import { ProjectGrid } from '@/components/ProjectGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luke Rathunde | Product Design',
  description: 'Product design portfolio showcasing innovative 3D printed designs.',
}

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: ['order', 'createdAt'],
    pagination: false,
  })

  return (
    <div className="home">
      <ProjectGrid projects={projects} />
    </div>
  )
}