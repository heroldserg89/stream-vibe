import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import { getPath } from '@/utils/getPath'

export default (props) => {
  const { children, title } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>{title} | Stream Vibe </title>
        <script src="/src/main.js" type="module" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={getPath('/images/favicons/apple-touch-icon.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={getPath('/images/favicons/favicon-32x32.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={getPath('/images/favicons/favicon-16x16.png')}
        />
        <link rel="manifest" href={getPath('/site.webmanifest')} />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
