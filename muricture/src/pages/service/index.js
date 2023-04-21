import Layout from '@/components/layout';
import Info from '@/components/service/info';

import Head from "next/head";

const service = () =>{
  const naverKey = process.env.NAVER_SITE;

  return(
      <Layout>

        <Head>
          <title>Muricture</title>
          <meta name="description" content="Muricture에서는 작품, 콘텐츠, 물건 등 다양한 창작물을 만드는 플랫폼 환경 구성을 목표로 하고 있습니다." />
          <meta name="og:title" content="창의력을 위한 플랫폼 Muricture입니다." />
          <meta name="og:description" content="다양한 작품들을 만들고, 소통해 봐요!" />
          <meta name="og:image" content="./img/Muricture.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="google-site-verification" content="..." />
          <meta name="naver-site-verification" content={naverKey} />
        </Head>
      


      <section className="flex min-h-screen flex-col items-center justify-center">
        <Info/>
      </section>

      {/* <section className="container items-center justify-center">   */}
      <section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center'>
        <div className='bg-gradient-to-r from-blue-500 to-violet-500 md:mb-0 justify-center items-center'>
          <a href="https://discord.gg/rTrnhkJq" className='text-white font-bold'>디스코드 합류하기</a>
        </div>
      </section>

      </Layout>
  )
}

export default service;