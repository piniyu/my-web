import { Link } from 'react-router-dom'

export default function BorderLink({
  url,
  value,
  isExternal,
}: {
  url: string
  value: string
  isExternal?: boolean
}) {
  if (!isExternal) {
    return (
      <Link
        className="group inline-block w-fit border border-black/20 py-2 px-3"
        to={url}
      >
        <span className="link group-hover:after:w-full">{value}</span>
      </Link>
    )
  }
  return (
    <a
      className="group inline-block w-fit border border-black/20 py-2 px-3"
      href={url}
      target="_blank"
    >
      <span className="link group-hover:after:w-full">{value}</span>
    </a>
  )
}
