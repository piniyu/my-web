import { Link } from 'react-router-dom'

export const projectsList = [
  {
    name: 'konote',
    path: 'projects/konote',
    subTitle: 'featured project',
    year: 2021,
  },
  {
    name: 'recipie',
    path: 'projects/recipie',
    subTitle: 'demo project',
    year: 2022,
  },
]
export default function ProjectsIndex() {
  return (
    <>
      <h1>PROJECTS</h1>
      <ul className="mt-6 list-['—'] space-y-4 pl-5">
        {projectsList.map(({ name, path, subTitle, year }) => (
          <li key={name} className="pl-4 marker:text-2xl">
            <Link to={path.split('/')[1]} className="group">
              <span className="link mr-4 text-2xl font-normal uppercase group-hover:after:w-full">
                {name}
              </span>
              <span className="">
                {year} / {subTitle}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
