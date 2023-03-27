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
        'Redux Toolkit',
        'Recharts',
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
            <mark>"Recipe"</mark> is a recipe-sharing website. For this project,
            I handled all aspects from designing to implementing the database. I
            incorporated features such as <mark>infinite scrolling</mark>,{' '}
            <mark>image uploading to AWS S3</mark>,{' '}
            <mark>AWS rds database</mark>, and{' '}
            <mark>utilized "Recharts" to generate charts</mark>. Additionally, I
            implemented the use of <code>cookies</code> to handle switching
            between light and dark modes for improved user experience with SSR.
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
