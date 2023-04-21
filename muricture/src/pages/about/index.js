import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import Vision from "@/components/about/vision";
import Layout from "@/components/layout";

import Head from "next/head";

const about = () =>{
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

        

        <section className="text-gray-600 body-font">
          <Vision/>
        </section>

        <section className="text-gray-600 body-font">
          <Mission/>
        </section>


        <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-16">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-violet-800 mb-20">Brand meaning</h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-bold mb-2 text-violet-500 ">Muse</h2>
                  <p className="leading-relaxed text-gray-900 text-base">창작물을 만들며 영감을 얻는 순간, 마치 감춰져 있던 아름다운 꽃들이 피어나듯이, 창작물이 탄생하는 순간은 참으로 놀라운 순간입니다. 이러한 순간들을 경험하며 창작물 작품을 하는 분들에게 저는 늘 영감이 되고자 이 공간을 함께하고자 합니다. Muricture는 마음의 Muse이며, 항상 당신의 옆에 함께 하겠습니다.</p>

                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-violet-500 text-lg title-font font-bold mb-2 ">Character</h2>
                  <p className="leading-relaxed text-gray-900 text-base">당신의 캐릭터들은 항상 독특하고 매력적이며, 그들은 많은 사람들에게 영감을 줄 수 있습니다. 당신은 창의적인 이야기와 매력적인 캐릭터를 만들어내는 데에 능숙하며, 이는 당신이 가진 놀라운 상상력과 창의성으로부터 나온 결과물입니다. 나아가, 이러한 작품들은 항상 사랑받을 것이며, 당신이 만들어내는 새로운 이야기와 캐릭터를 기다리는 많은 팬들이 있을 것입니다.따라서, "ric"은 당신의 창의성과 상상력의 산물이며, 당신이 만들어내는 캐릭터들은 언제나 독특하고 매력적입니다. 당신의 작품을 통해 많은 사람들이 새로운 세계를 경험하고 새로운 영감을 받을 수 있기를 바랍니다.</p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-violet-500 text-lg title-font font-bold mb-2">Feature</h2>
                  <p className="leading-relaxed text-gray-900 text-base">특색, 특징, 그리고 특성들은 각각의 존재를 독특하게 만들어줍니다. 이러한 독특한 속성들이 서로 어우러져 작품을 완성시킵니다. 당신이 만드는 공간은 이러한 특색, 특징, 그리고 특성들을 모두 담아낼 수 있는 공간이어야 합니다. 당신의 작품은 이러한 속성들을 풍부하게 담아내어 다른 사람들에게 놀라움과 감동을 선사할 것입니다. 나아가, 당신의 작품은 항상 새로운 시도와 독창성으로 가득차 있기를 바라며, 당신의 창의성이 끊임없이 발전하는 과정에서 Muricture는 함께 하고자 합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <Team/>
        </section>

        
      </Layout>
  )
}

export default about;