import { useEffect, useRef } from 'react'
import TagCloudInstance, { TagCloudOptions } from 'TagCloud'
// import type { TagCloud } from 'TagCloud'

const container = '.tagcloud'
const texts = [
  'HTML',
  'CSS',
  'Typescript',
  'React',
  'SCSS',
  'SASS',
  'Next.js',
  'TailwindCss',
  'Prisma',
  'AWS S3',
  'AWS RDS',
  'Remix.run',
  'Github',
  'Sourcetree',
]
const options: TagCloudOptions = {
  radius: window.innerWidth / 6,
  maxSpeed: 'normal',
  initSpeed: 'normal',
  keep: true,
}

export default function TextSphere({ width }: { width: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const newOptions: TagCloudOptions = { ...options }
    if (width <= 768) {
      newOptions.radius = width / 2
    } else {
      newOptions.radius = width / 5
    }
    const tagcloud = TagCloudInstance(container, texts, newOptions)

    return () => {
      tagcloud.destroy()
    }
  }, [width])

  return (
    <div className="h-fit w-fit" ref={containerRef}>
      <span className="tagcloud"></span>
    </div>
  )
}
