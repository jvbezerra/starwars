import Head from 'next/head'
import Image from 'next/image'

export const Metadata: React.FC<{ title?: string, description?: string }> = ({ 
  title = "Star Wars Characters",
  description = "List of characters from Star Wars"
}) => {
  return (
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="author" content="Gerardo Valencia" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'center' }}>
    <Metadata />
    <Image alt="Star Wars" src="/starwars.png" width="150px"height="60px"/>
  </header>
)

export default Header