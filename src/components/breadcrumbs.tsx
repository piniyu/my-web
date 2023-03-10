import { Params, useMatches } from 'react-router-dom'

type RouteWithHandle<Handle extends string, Value> = {
  id: string
  pathname: string
  params: Params<string>
  data: unknown
  handle: Record<Handle, Value>
}

function isRecordWithKey<T extends string>(
  value: unknown,
  key: T,
): value is Record<T, unknown> {
  return !!value && typeof value === 'object' && key in value
}

function hasHandle<Handle extends string, Value>(
  handle: Handle,
  valuePredicate?: (v: unknown) => v is Value,
) {
  return (
    route:
      | {
          handle: unknown
        }
      | RouteWithHandle<Handle, Value>,
  ): route is RouteWithHandle<Handle, Value> => {
    return (
      !!route.handle &&
      isRecordWithKey(route.handle, handle) &&
      (!valuePredicate ||
        (handle in route.handle && valuePredicate(route.handle[handle])))
    )
  }
}

export default function Breadcrumbs() {
  let matches = useMatches()
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter(
      hasHandle('crumb', (v: unknown): v is Object => {
        return typeof v === 'object'
      }),
    )
    // now map them into an array of elements, passing the loader
    // data to each one
    .map(match => match.handle.crumb)

  return (
    <ol className="flex gap-2 text-xs">
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  )
}
