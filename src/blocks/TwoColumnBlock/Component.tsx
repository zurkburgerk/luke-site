import { RichText } from '@/components/RichText'
import { SerializedBlockNode } from '@payloadcms/richtext-lexical'

type TwoColumnBlock = {
  left: unknown
  right: unknown
  blockType: 'twoColumnBlock'
  id?: string
}

type Props = {
  node: SerializedBlockNode<TwoColumnBlock>
}

export const TwoColumnBlockComponent = ({ node }: Props) => {
  const leftData = node.fields.left as object | null
  const rightData = node.fields.right as object | null

  return (
    <div className="two-column-block">
      <div className="two-column-block__left">
        {leftData && <RichText data={leftData} />}
      </div>
      <div className="two-column-block__right">
        {rightData && <RichText data={rightData} />}
      </div>
    </div>
  )
}