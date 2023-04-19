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
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a class="text-indigo-500">example@email.com</a>
                  <p class="leading-normal my-5">49 Smith St.
                    <br/>Saint Cloud, MN 56301
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="flex min-h-screen flex-col items-center justify-center">
          <div class="container bg-gray-100 px-4 mx-auto py-4">
            <h2 class="text-3xl font-bold text-center mb-12">Contact us</h2>
            <div class="mx-auto lg:w-3/4 max-w-lg">
              <div class="bg-white rounded text-center p-5 shadow-down">
                <h4 class="mb-8 lg:mb-10">Contact Form</h4>
                <form action="mailto:youremail@example.com" method="post" enctype="text/plain" class="grid grid-cols-1 gap-6">
                  <div>
                    <input type="email" id="email" name="email" placeholder="이메일을 입력해 주세요." class="form-input mb-4" required/>
                  </div>
                  <div class="col-span-2">
                    <textarea name="message" id="message" class="form-textarea mb-4" placeholder="Type Message Here" required></textarea>
                  </div>
                  <div class="mx-auto">
                    <button type="submit" class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </Layout>
  )
}

export default contact;