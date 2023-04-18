import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer';
import Head from "next/head";

const about = () =>{
  return(
    <>
      <Head>
        <title>Muricture</title>
        <meta name="description" content="Muricture에서는 작품, 콘텐츠, 물건 등 다양한 창작물을 만드는 플랫폼 환경 구성을 목표로 하고 있습니다." />
        <meta name="og:title" content="창의력을 위한 플랫폼 Muricture입니다." />
        <meta name="og:description" content="다양한 작품들을 만들고, 소통해 봐요!" />
        <meta name="og:image" content="./img/Muricture.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header/>

      <section class="bg-gray-100 py-16">
        <div class="container px-4 mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Services</h2>
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
      <p> test 문구 </p>
      
      <div class="container mx-auto px-4 py-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-gray-200 h-48 flex items-center justify-center">서성조</div>
          <div class="bg-gray-200 h-48 flex items-center justify-center"></div>
          <div class="bg-gray-200 h-48 flex items-center justify-center"></div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default about;