import Mission from "@/components/about/Mission";
import BrandMeaning from "@/components/about/BrandMeaning";
import Team from "@/components/about/Team";
import Vision from "@/components/about/Vision";

import Layout from "@/components/layout";

import Head from "next/head";
import Space from "@/components/common/Space";

const About = () => {
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
      </Head>

      <section className="container flex justify-center items-center">
        <Space />
      </section>

      <section className="container flex-col px-5 py-2 mx-auto">
        <Vision />
        <Mission />
      </section>

      <section className="flex min-h-3/4 flex-col items-center justify-center text-white-400 body-font">
        <BrandMeaning />
      </section>

      <section className="flex min-h-3/4 flex-col items-center justify-center text-gray-600 body-font">
        <Team />
      </section>
    </Layout>
  );
};

export default About;
