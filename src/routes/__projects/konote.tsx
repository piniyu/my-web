import Slideshow from '~/components/slideshow'
import ProjectPostWrapper from '../../components/project-post-wrapper'
import ProjectPostTemplate from '../../components/project-post-template'
import konte1 from '~/public/knote1.png'
import konte2 from '~/public/knote2.png'
import konte3 from '~/public/knote3.png'

export default function Konote() {
  return (
    <ProjectPostWrapper
      tools={[
        'React',
        'Next.js',
        'TailwindCss',
        'Slate.js',
        'Storybook',
        'Apollo',
      ]}
    >
      <ProjectPostTemplate
        subTitle="featured project"
        title="konote"
        description={
          <>
            <mark>"Konote"</mark> is a shared note-taking website with the main
            goal of making it easy for users to share and learn from each
            other's notes. Users can link related notes together, creating a
            network of interconnected notes that enhances the learning
            experience. <br />
            <p className="indent-4">
              In this project, I'm responsible for the front-end and a bit of
              design work. I focused primarily on the functions of the website
              to ensure that users can easily access the information within the
              notes. As a result, we kept the UI clean and user-friendly.
            </p>
            <p className="indent-4">
              The editor was built using <mark>"Slate.js"</mark>, which is an
              amazing library for building custom editors. For the UI, we chose
              to use <mark>"TailwindCSS"</mark> for CSS and{' '}
              <mark>"Storybook"</mark> for testing UI components, especially
              when the back-end has not been implemented yet.
            </p>
            {/* <br />
            <br />
            <mark>
              !! Currently, the website is not accessible because it's not ready
              to be opened to public !!
            </mark> */}
          </>
        }
        // links={[
        //   {
        //     value: 'Github',
        //     url: 'https://github.com/w121211/conote',
        //     isExternal: true,
        //   },
        // ]}
      />

      <Slideshow imageUrls={[konte1, konte2, konte3]} />
    </ProjectPostWrapper>
  )
}
