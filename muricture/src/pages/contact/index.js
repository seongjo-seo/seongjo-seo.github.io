import Layout from '@/components/layout';

import Head from "next/head";

const contact = () =>{
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

        <section class="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">이메일</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600">내용</label>
                    <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">보내기</button>
                </div>
              </div>
            </div>
          </div>
        </section>


      </Layout>
  )
}

export default contact;