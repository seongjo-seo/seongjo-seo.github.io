import AnimationMission from "./AnimationMission";

const Mission = () => {
  return (
    // mx-auto
    <div className="mx-auto px-5 items-center flex-col sm:text-center md:text-right lg:text-right">
      <h2 className="css-selector-en text-3xl font-bold mb-4 text-indigo-500">
        Mission
      </h2>
      <AnimationMission />
      <div className="text-right lg:w-2/3 w-full">
        <p className="css-selector-kr mb-8 leading-relaxed dark:text-gray-300 ">
          모든 작품의 창작자들이 모일 수 있는 플랫폼을 만드는 것을 목표로
          합니다.
        </p>
      </div>
    </div>
  );
};

export default Mission;
