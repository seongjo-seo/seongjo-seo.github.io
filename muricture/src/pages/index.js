import Head from 'next/head';
import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer';

const Home = () => {
  return (
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
      <div class="py-8"/>

        <section>
        <main class="">
          <div class="top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div class="container ma-auto px-20 ">
              <img src="./img/main_1.png" alt=".." class="mx-auto w-full" />
            </div>
              <h2 class="text-6xl font-bold mb-4">Let's unleash our creativity.</h2>
              <p class="text-3xl font-bold mb-10 text-center">우리의 창의력을 펼쳐봐요.</p>
              <div class="flex justify-center pb-20">
                <button class="bg-blue-300 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-400">더 알아보기</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">문의하기</button>
              </div>
          </div>

        </main>
        <div class="container mx-auto px-4 py-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">현재는 서비스 이용자를 모집하고 있습니다.</h2>
          <p class="text-lg text-gray-700 mb-10 text-center">향후 데이터를 공유해 드릴 예정입니다.</p>
        </div>
      </section>



      {/* --- 소개 --- */}
      <section>
        <div class="container mx-auto py-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <div class="border-b border-gray-300 mb-12"></div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Service</h3>
              <p class="text-gray-700 leading-relaxed mb-8">창작할 수 있는 다양한 가치속에서 창작자 모두가 수익을 낼 수 있는 방향을 지향합니다. <br/> 인스타툰, 자기 캐릭터 툰, 썰 툰 등등 다양한 캐릭터들이 활동할 수 있는 플랫폼을 만드는 것을 목표로 합니다.</p>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">서비스 시작하기</button>
            </div>
            <div class="flex justify-center items-center">
              <div class="container mx-auto py-10 px-5">
                <img src="./img/main_2.png" alt="..." class="mx-auto" />
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-8">
            <div class="order-2">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Team</h3>
              <p class="text-gray-700 leading-relaxed mb-8">멈추지 않고 성장하고, 하루가 다르게 성장하는 모습을 보여드리고 싶어요.<br/>꾸준히 무엇을 만들어본 사람들이면 좋겠어요.</p>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">팀 소개 보기</button>
            </div>
            <div class="order-1 flex justify-center items-center">
              <div class="container mb-12 max-w-2/5 max-h-2/5 py-auto px-5">
                <img src="./img/main_3.png" alt="..." class="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

    <section class="container mx-auto py-10 px-5">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <p class="text-lg font-semibold text-center text-gray-800">창작의 가치를 더하고 함께 나아갈 수 있으면 좋겠습니다.</p>
      </div>
    </section>
      
      <Footer/>

    </>
  )
}


export default Home;