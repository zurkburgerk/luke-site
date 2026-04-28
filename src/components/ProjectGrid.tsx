'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import type { Project } from '@/payload-types'

type Props = {
  projects: Project[]
}

export function ProjectGrid({ projects }: Props) {
  const [hoveredId, setHovered] = useState<number | null>(null)

  return (
    <div className="project-grid">
      <div className="project-grid__cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={project.id === hoveredId}
            onHover={setHovered}
          />
        ))}
      </div>
    </div>
  )
}