// import Hero from "@/components/home/hero";

import Join from "@/components/common/Join";

import Layout from "@/components/layout";

import Head from "next/head";
import SimpleInfo from "@/components/home/SimpleInfo";
import FirstScreen from "@/components/home/FirstScreen";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Muricture</title>
        <meta
          name="description"
          content="Muricture에서는 작품, 콘텐츠, 물건 등 다양한 창작물을 만드는 플랫폼 환경 구성을 목표로 하고 있습니다."
        />
        <meta name="og:title" content="창의력을 위한 플랫폼 Muricture입니다." />
        <meta
          name="og:description"
          content="다양한 작품들을 만들고, 소통해 봐요!"
        />
        <meta name="og:image" content="./img/Muricture.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="..." />
      </Head>
      <section className="flex h-1/2 flex-col items-center justify-center text-gray-600 body-font">
        <FirstScreen />
      </section>

      <section>
        <SimpleInfo />
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
        <Join />
      </section>
    </Layout>
  );
};

export default Home;

{
  /* <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center"> */
}
{
  /* <Hero /> */
}
{
  /* </div> */
}
{
  /* <section className="text-gray-600 body-font"></section> */
}
