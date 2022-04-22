import Head from 'next/head'
import Image from 'next/image'

import Storefront from './assemblies/Storefront'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Archefy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Storefront/>
    </div>
  )
}
