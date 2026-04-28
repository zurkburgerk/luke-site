'use client'

import { useState, useEffect } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import type { Project } from '@/payload-types'
import { getProjects } from '@/app/(frontend)/actions'

export function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects().then((data: Project[]) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="project-grid">
        <div className="project-grid__loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="project-grid">
      <div className="project-grid__cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={project.id === hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  )
}