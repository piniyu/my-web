import { useResizeDetector } from 'react-resize-detector'
import TextSphere from '~/components/text-sphere'
import ProjectPostWrapper from '../components/project-post-wrapper'

export default function About() {
  const { width, ref } = useResizeDetector()
  return (
    <div className="flex flex-col items-center lg:flex-row" ref={ref}>
      <ProjectPostWrapper>
        <div className="space-y-6 sm:space-y-8">
          <p className=" tracking-normal text-black">My name is</p>
          <div>
            <h1 className="relative text-5xl leading-tight text-black sm:text-7xl">
              Yi-Ching Chen.
            </h1>
            <h2 className="text-4xl font-thin leading-tight text-black sm:text-5xl">
              I'm a self-taught
              <br />
              front-end developer.
            </h2>
          </div>
        </div>
        <p className="max-w-lg text-black ">
          I'm passionate about using latest modern technologies to build
          user-friendly and maintainable website.
          <br />
          <br />
          Currently, I'm focusing on learnig as many new front-end technologies
          as I can to expand my knowledge of web, and I'm also starting to learn
          more about back-end development as well !!
        </p>
      </ProjectPostWrapper>
      <TextSphere width={width ?? 0} />
    </div>
  )
}
