import ImageNext from 'next/image'
import { MouseEventHandler } from 'react'

interface ImageProps {
  className?: string
  src: StaticImageData
  alt: string
  priority?: boolean
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
function Image({ className, src, alt, priority, onClick }: ImageProps) {
  if (src.src.includes('png')) {
    return (
      <div className={className} onClick={onClick}>
        <div className={'relative'}>
          <ImageNext
            layout="responsive"
            objectFit="contain"
            src={src}
            alt={alt}
            priority={priority}
            placeholder="blur"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={className} onClick={onClick}>
      <div className={'relative'}>
        <ImageNext
          layout="responsive"
          objectFit="contain"
          src={src}
          alt={alt}
          priority={priority}
        />
      </div>
    </div>
  )
}

export default Image
