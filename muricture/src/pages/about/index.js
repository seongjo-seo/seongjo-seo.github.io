import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import Vision from "@/components/about/vision";
import Layout from "@/components/layout";

import Head from "next/head";

const about = () =>{
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
        </Head>

        <section class="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-16">
          <div class="container px-4 mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">Brand</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white hover:shadow-md shadow p-8">
                <i class="ti-palette text-4xl mb-5"></i>
                <h4 class="text-xl font-bold mb-4">UI Design</h4>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="bg-primary hover:shadow-md shadow p-8">
                <i class="ti-vector text-4xl mb-5"></i>
                <h4 class="text-xl font-bold mb-4 text-white">UX Design</h4>
                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="bg-white hover:shadow-md shadow p-8">
                <i class="ti-panel text-4xl mb-5"></i>
                <h4 class="text-xl font-bold mb-4">Interaction Design</h4>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <Vision/>
        </section>

        <section class="text-gray-600 body-font">
          <Mission/>
        </section>
        
        <section class="text-gray-600 body-font">
          <Team/>
        </section>

        
      </Layout>
  )
}

export default about;