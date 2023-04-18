import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer';
import Head from "next/head";

const contact = () =>{
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

      <section class="py-16">
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

      <Footer/>
    </>
  )
}

export default contact;