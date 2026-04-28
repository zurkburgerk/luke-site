import { CollectionConfig } from 'payload'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import { ModelBlock } from '@/blocks/ModelBlock/config'
import { TwoColumnBlock } from '@/blocks/TwoColumnBlock/config'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            value ||
            data?.title
              ?.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, ''),
        ],
      },
    },
    {
      name: 'model',
      type: 'relationship',
      relationTo: 'models',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [ModelBlock, TwoColumnBlock],
          }),
        ],
      }),
    },
  ],
}