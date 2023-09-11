const Space = () => {
  return (
    <>
      <div className="container flex justify-center items-center h-screen">
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="">
            <div className="w-full h-full" />
            <div className="">
              <div className="text-center text-black text-xl font-normal leading-loose">
                우리는 이런 것을 만들고 있어요.
              </div>
              <div className="sm:left-1/4 md:left-1/4 lg:left-[70.02px]">
                <div className="relative text-5xl font-bold">
                  <span className="absolute top-0 left-0 text-zinc-900">
                    Muricture
                  </span>
                  <div className="absolute top-0 left-0 bg-zinc-900 p-2">
                    <span className="text-white">Mu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Space;
