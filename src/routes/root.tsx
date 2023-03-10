import { useOutlet } from 'react-router'
import { animated, useTransition } from '@react-spring/web'
import Sider from '~/components/sider'
import { useEffect } from 'react'
import Breadcrumbs from '~/components/breadcrumbs'

function App() {
  const elements = useOutlet()

  const transitions = useTransition(elements, {
    exitBeforeEnter: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  })

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0)
    }
  }, [elements])

  return (
    <>
      <div
        className={`
            relative
            mx-auto     
            min-h-screen
            w-screen
            max-w-7xl
            px-6
            sm:px-10
            md:px-14
            lg:px-20
            xl:px-48
            `}
      >
        <Sider />
        <div className=" relative mx-auto grid h-full max-w-7xl py-20 md:py-16 lg:py-16 xl:py-20 ">
          <div className="absolute left-0 top-6 md:top-2 xl:top-4">
            <Breadcrumbs />
          </div>
          <div className="min-w-0 ">
            {transitions((style, item) => (
              <animated.div style={style}>{item}</animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
