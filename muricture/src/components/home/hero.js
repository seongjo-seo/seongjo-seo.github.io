import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font font-bold sm:text-4xl text-4xl mb-4 text-black">
          Let's unleash our creativity.
        </h1>
        <p className="mb-8 leading-relaxed">
          상상이 멈추지 않는 세상을 그려가요.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-gradient-to-r from-violet-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Muricture 시작하기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
