import { ReactNode, useCallback, useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'

export default function ProjectPostWrapper({
  children,
  tools,
}: {
  children: ReactNode
  tools?: string[]
}) {
  const toolHeaderRef = useRef<HTMLHeadingElement>(null)
  const onResize = useCallback((width: number | undefined) => {
    if (width && toolHeaderRef.current) {
      toolHeaderRef.current.style.setProperty('--width', `${width}px`)
    }
  }, [])
  const { ref: toolWrapperRef } = useResizeDetector({
    onResize,
  })

  return (
    <main className="flex min-w-0 flex-1 flex-col gap-8 md:flex-row lg:gap-x-10 xl:gap-x-20">
      <div className="flex min-w-0 flex-[3] flex-shrink flex-col gap-y-8 sm:gap-y-10">
        {children}
      </div>
      {tools ? (
        <div className=" min-w-max flex-1 flex-shrink-0 overflow-hidden md:flex-shrink">
          <div className=" text-center md:mt-[10rem]" ref={toolWrapperRef}>
            <h3
              className={`
            relative 
            z-10
            inline-block
            px-2
            font-medium
           
            before:absolute
            before:top-1/2
            before:left-0
            before:h-[1px]
            before:w-[var(--width)]
            before:bg-black/20
            before:content-['']
            before:-translate-x-full
            after:absolute
            after:top-1/2
            after:right-0
            after:h-[1px]
            after:w-[var(--width)]
            after:bg-black/20
            after:content-['']
            after:translate-x-full
            `}
              ref={toolHeaderRef}
            >
              LIBRARIES
            </h3>
            <ul className="-mt-3 space-y-2 border border-t-0 border-black/20 p-5 ">
              {tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </main>
  )
}
