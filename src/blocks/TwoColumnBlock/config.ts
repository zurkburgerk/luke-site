import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const TwoColumnBlock: Block = {
  slug: 'twoColumnBlock',
  labels: {
    singular: 'Two Column',
    plural: 'Two Columns',
  },
  fields: [
    {
      name: 'left',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'right',
      type: 'richText',
      editor: lexicalEditor({}),
    },
  ],
}