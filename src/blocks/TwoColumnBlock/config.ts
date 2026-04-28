import { Block } from 'payload'

export const TwoColumnBlock: Block = {
  slug: 'twoColumnBlock',
  labels: {
    singular: 'Two Column',
    plural: 'Two Columns',
  },
  fields: [
    {
      name: 'left',
      type: 'json',
    },
    {
      name: 'right',
      type: 'json',
    },
  ],
}