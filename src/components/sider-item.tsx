import { NavLink } from 'react-router-dom'
import { SiderItemType } from './sider'

export default function SiderItem({
  name,
  path,
  childrenItems,
  isChild,
}: SiderItemType & { isChild?: boolean }) {
  return (
    <>
      <li className={`group relative ${isChild ? 'pl-2 md:pl-0' : ''}`}>
        <NavLink
          end
          to={path}
          className={({ isActive }) => `
            relative
            inline-block
            cursor-pointer
            py-3
            transition-all
            duration-500
            before:absolute
            before:bottom-3
            before:left-0
            before:h-[1px]
            before:w-0
            before:bg-black
            before:transition-all
            before:duration-500
            before:content-['']
            hover:before:w-full
            md:gap-5
            ${isActive ? 'before:w-full' : ''}
          `}
        >
          {name.toUpperCase()}
        </NavLink>
        {childrenItems ? (
          <ul
            className={`
            list-['—'] 
            border-black/20
            bg-beige
            pl-4
            transition-all
            duration-500
            group-hover:block
            md:absolute
            md:left-1/2
            md:hidden
            md:list-none
            md:border
            md:px-4
            md:-translate-x-1/2
            `}
          >
            {childrenItems?.map(props => (
              <SiderItem key={props.name} {...props} isChild />
            ))}
          </ul>
        ) : null}
      </li>
    </>
  )
}
