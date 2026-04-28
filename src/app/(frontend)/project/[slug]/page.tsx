import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ModelCanvas from '@/components/Model/ModelCanvas'
import { RichText } from '@/components/RichText'
import type { Metadata } from 'next'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    return { title: 'Project Not Found' }
  }

  const title = typeof project.title === 'string' ? project.title : 'Project'

  return {
    title: `${title} | Luke Rathunde`,
  }
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  const model = typeof project.model === 'object' ? project.model : null
  const modelUrl = model?.url || ''

  return (
    <div className="project-page">
      <Link href="/" className="project-page__back">
        ← Back to Work
      </Link>

      <div className="project-page__hero">
        {modelUrl && (
          <ModelCanvas
            url={modelUrl}
            autoRotate
            fadeIn
            transition="fromRight"
            height={500}
          />
        )}
      </div>

      <div className="project-page__info">
        <h1 className="project-page__title">{project.title}</h1>
        {project.year && (
          <span className="project-page__year">{project.year}</span>
        )}
      </div>

      {project.content && (
        <div className="project-page__content">
          <RichText data={project.content} />
        </div>
      )}
    </div>
  )
}