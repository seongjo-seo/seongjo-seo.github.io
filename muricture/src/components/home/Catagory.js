const Catagory = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div className="container md:pl-16  mx-auto flex px-5 py-24 flex-col items-center">
            <div className="container border-b border-gray-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
                About Us
              </h2>
            </div>

            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-900">
                  Service
                </h1>
                <p className="mb-8 leading-relaxed">
                  창작할 수 있는 다양한 가치속에서 창작자 모두가 수익을 낼 수
                  있는 방향을 지향합니다. <br /> 인스타툰, 자기 캐릭터 툰, 썰 툰
                  등등 다양한 캐릭터들이 활동할 수 있는 플랫폼을 만드는 것을
                  목표로 합니다.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-gradient-to-r from-blue-500 to-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    서비스 시작하기
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src="./img/main_2.png" alt="..." className="mx-auto" />
              </div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src="./img/main_3.png" alt="..." className="mx-auto" />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-900">
                  Team
                </h1>
                <p className="mb-8 leading-relaxed">
                  멈추지 않고 성장하고, 하루가 다르게 성장하는 모습을 보여드리고
                  싶어요.
                  <br />
                  꾸준히 무엇을 만들어본 사람들이면 좋겠어요.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-gradient-to-r from-indigo-500 to-blue-500  border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    소개 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catagory;
