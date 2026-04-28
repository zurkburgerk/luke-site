'use client'

import Link from 'next/link'
import { ModelPreview } from '@/components/ModelPreview'
import type { Project } from '@/payload-types'

type Props = {
  project: Project
  isHovered: boolean
  onHover: (id: number | null) => void
}

export function ProjectCard({ project, isHovered, onHover }: Props) {
  const projectTitle = typeof project.title === 'string' ? project.title : 'Untitled'
  const projectYear = project.year || ''
  const model = typeof project.model === 'object' ? project.model : null
  const modelUrl = model?.url || null

  return (
    <Link
      href={`/project/${project.slug}`}
      className={`project-card ${isHovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="project-card__content">
        <h2 className="project-card__title">{projectTitle}</h2>
        {projectYear && (
          <span className="project-card__year">{projectYear}</span>
        )}
      </div>
      {modelUrl && (
        <div className="project-card__model">
          <ModelPreview url={modelUrl} height={280} />
        </div>
      )}
    </Link>
  )
}