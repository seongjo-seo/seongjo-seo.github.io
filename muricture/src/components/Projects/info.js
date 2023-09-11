import Image from "next/image";
import ProjectInfo from "public/img/main_1.png";

const Info = () => {
  return (
    <>
      <div className="container flex justify-center items-center h-screen">
        <div className="bg-white flex flex-col justify-center items-center gap-16">
          <div className="text-black text-2xl font-semibold">Project</div>
          <div className="flex flex-col justify-center items-center gap-8">
            <Image
              className="w-2/3 h-2/3"
              src={ProjectInfo}
              alt="이미지가 없습니다."
            />
            <div className="h-44 flex flex-col justify-center items-center gap-6">
              <div className="h-44 flex flex-col justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-4">
                  <div className="text-neutral-700 text-2xl font-semibold">
                    introduce
                  </div>
                  <div className="pt-1 flex flex-col justify-center items-center">
                    <div className="w-6 h-6 relative"></div>
                  </div>
                </div>
                <div className="text-neutral-600 text-base leading-normal">
                  Muse, Character, Feature
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
