const BrandMeaning = () => {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="container px-5 py-2 mx-auto">
          <h1 className="css-selector-kr sm:text-3xl text-2xl font-bold title-font text-center text-violet-800 dark:text-violet-400 mb-20">
            브랜드 의미
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="css-selector-en text-lg title-font font-bold mb-2 text-violet-600 dark:text-violet-300 ">
                  Muse
                </h2>
                <p className="css-selector-kr leading-relaxed text-gray-900 dark:text-gray-300 text-base">
                  작가 또는 화가 등에게 영감을 주는 Muse를 의미합니다.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="css-selector-en text-lg title-font font-bold mb-2 text-violet-600 dark:text-violet-300 ">
                  Character
                </h2>
                <p className="css-selector-kr leading-relaxed text-gray-900 dark:text-gray-300 text-base">
                  영감 받은 작품속에 있는 캐릭터(Character)에서 "ric"릭을
                  담당하고 있어요.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="css-selector-en text-lg title-font font-bold mb-2 text-violet-600 dark:text-violet-300">
                  Feature
                </h2>
                <p className="css-selector-kr leading-relaxed text-gray-900 dark:text-gray-300 text-base">
                  창작물안에 캐릭터의 특색, 특징, 그리고 특성들을 다뤄요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandMeaning;
