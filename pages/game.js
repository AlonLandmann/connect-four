import Head from 'next/head'
import Game from '@/components/Game'

export default function Index() {
  return (
    <>
      <Head>
        <title>Connect Four</title>
        <meta name='description' content='Connect-4 single player game' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main>
        <Game />
      </main>
    </>
  )
}
