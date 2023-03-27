import { ReactNode } from 'react'
import BorderLink from './border-link'

export default function ProjectPostTemplate({
  subTitle,
  title,
  description,
  links,
}: {
  subTitle: string
  title: string
  description: ReactNode
  links?: { value: string; url: string; isExternal?: boolean }[]
}) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <header>
        <h1>
          <p className="mb-3 text-sm font-semibold text-black">
            {subTitle.toUpperCase()}
          </p>
          {title.toUpperCase()}
        </h1>
      </header>
      <p className="indent-4">{description}</p>

      {links ? (
        <div className="flex gap-8">
          {links?.map(({ value, url, isExternal }) => (
            <BorderLink key={value} {...{ value, url, isExternal }} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
