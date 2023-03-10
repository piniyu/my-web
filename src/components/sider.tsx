import SiderItem from './sider-item'
import { ReactComponent as MenuIcon } from '~/public/menu.svg'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { projectsList } from '~/routes/__projects/index'

export type SiderItemType = {
  name: string
  path: string
  childrenItems?: SiderItemType[]
}

export const siderList: SiderItemType[] = [
  {
    name: 'about',
    path: '/',
  },

  {
    name: 'projects',
    path: '/projects',
    childrenItems: projectsList,
  },
]

export default function Sider() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Element)) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`
          fixed
          right-0
          top-0
          z-50
          h-screen
          gap-4
          self-start
          border-l
          border-black/20
          p-8
          md:border-b
          md:border-l-0
          
          ${open ? 'translate-x-0' : 'translate-x-full'}
          
          bg-beige
          transition-all
          md:sticky
          md:top-0
          md:col-span-1
          md:h-auto
          md:p-0
          md:translate-x-0
          `}
      ref={navRef}
    >
      <ul className="flex w-full min-w-max select-none flex-col justify-center  text-sm font-medium text-black md:flex-row md:gap-12">
        {siderList.map(({ name, path, childrenItems }) => (
          <SiderItem key={name} {...{ name, path, childrenItems }} />
        ))}
      </ul>
      <button
        className="absolute top-0 left-0 z-50 -ml-4 border border-t-0 border-black/20 bg-beige p-2 -translate-x-full md:hidden"
        onClick={() => setOpen(prev => !prev)}
      >
        <MenuIcon className="fill-black" />
      </button>
    </nav>
  )
}
