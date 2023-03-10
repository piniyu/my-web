export default function BorderLink({
  url,
  value,
}: {
  url: string
  value: string
}) {
  return (
    <a
      className="group border border-black/20 py-2 px-3"
      href={url}
      target="_blank"
    >
      <span className="link group-hover:after:w-full">{value}</span>
    </a>
  )
}
