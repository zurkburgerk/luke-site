import ModelCanvas from '@/components/Model/ModelCanvas'
import { Model } from '@/payload-types'

type Props = {
  model: Model
  height?: number
  transition?: 'fromRight' | 'fromLeft'
  fadeIn?: boolean
  autoRotate?: boolean
  trackMouse?: boolean
}

export const ModelBlockComponent = ({
  model,
  height = 400,
  transition = undefined,
  autoRotate = false,
  fadeIn = false,
  trackMouse = false,
}: Props) => {
  return (
    <figure style={{ margin: '2rem 0' }}>
      <div style={{ height }}>
        {model.url && (
          <ModelCanvas
            url={model.url}
            transition={transition}
            autoRotate={autoRotate}
            fadeIn={fadeIn}
            trackMouse={trackMouse}
          />
        )}
      </div>
    </figure>
  )
}
