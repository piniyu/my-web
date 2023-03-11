import { useResizeDetector } from 'react-resize-detector'
import BorderLink from '~/components/border-link'
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
          I'm passionate about creating website that provides a intutive user
          experience. As a natural problem solver with high attention to detail,
          and I thrive on taking on challenge projects and finding innovative.
          <br />
          Intrested in the entire front-end spectrum and working on ambitious
          projects. I'm constantly learning and staying up-to-date with the
          latest front-end technologies and tools, and I am excited to apply my
          skills to ambitious projects in the future.
        </p>
        <BorderLink url="projects" value="My Projects" />
      </ProjectPostWrapper>
      <TextSphere width={width ?? 0} />
    </div>
  )
}
