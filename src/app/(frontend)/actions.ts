'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Project } from '@/payload-types'

export async function getProjects(): Promise<Project[]> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    sort: ['order', 'createdAt'],
    pagination: false,
  })

  return docs
}