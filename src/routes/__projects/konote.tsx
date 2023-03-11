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
        'Storybook',
        'Apollo',
        'Prisma',
      ]}
    >
      <ProjectPostTemplate
        subTitle="featured project"
        title="konote"
        description={
          <>
            Konote is a shared note-taking website. The main goal is to make it
            easy for users to share their notes and learn from other users'
            notes.
            <br />
            In the project, I'm responsible for the front-end and a litle bit of
            design. I focused more on the functions because we wanted users to
            be able to focus on the information in notes. Therefore, we kept the
            page's UI clean and user-friendly.
            <br />
            <br />
            <mark>
              {/* <SquareIcon className="mr-1 inline-block h-fit w-2 origin-center fill-inherit align-[inherit] rotate-45" />{' '} */}
              !! Currently, the website is not accessible because it's not ready
              to be opened to public !!
            </mark>
          </>
        }
        links={[
          {
            value: 'Github',
            url: 'https://github.com/w121211/conote',
            isExternal: true,
          },
        ]}
      />

      <Slideshow imageUrls={[konte1, konte2, konte3]} />
    </ProjectPostWrapper>
  )
}
