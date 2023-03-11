import MainWrapper from '../../components/project-post-wrapper'
import ProjectPostTemplate from '../../components/project-post-template'
import Slideshow from '../../components/slideshow'
import darkRecipie from '~/public/recipie-remix-app-dark.png'
import recipie from '~/public/recipie-remix-app.png'

export default function Recipie() {
  return (
    <MainWrapper
      tools={[
        'React',
        'Remix.run',
        'TailwindCss',
        'Prisma',
        'AWS S3',
        'AWS RDS',
      ]}
    >
      <ProjectPostTemplate
        subTitle="demo project"
        title="recipie"
        description={
          <>
            "Recipie" is a simple recipe sharing website. In this project,{' '}
            <br />I did all the work from design to back-end by myself.
            Regarding the front-end part, I tried to implement any technique I
            wanted to learn. Such as, <mark>infinite scrolling</mark>,{' '}
            <mark>upload image to AWS S3</mark>,{' '}
            <mark>making a rds database</mark> and{' '}
            <mark>drawing charts with "Recharts"</mark> and so forth. I also
            tried to use cookies to handle swtiching between light mode and dark
            mode for better UX.
          </>
        }
        links={[
          {
            value: 'Github',
            url: 'https://github.com/piniyu/recipie-remix-app',
            isExternal: true,
          },
          {
            value: 'Demo',
            url: 'https://recipie-remix-app.fly.dev/',
            isExternal: true,
          },
        ]}
      />

      <Slideshow imageUrls={[recipie, darkRecipie]} />
    </MainWrapper>
  )
}
