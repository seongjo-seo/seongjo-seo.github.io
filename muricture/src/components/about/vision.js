import AnimationVision from "./AnimationVision";

const Vision = () => {
  return (
    <div className="px-5 py-24 items-center justify-center flex-col">
      <h2 className="css-selector-en text-3xl font-bold text-indigo-500 mb-4 ">
        Vision
      </h2>
      <AnimationVision />
      <div className="text-center w-full">
        <h1 className="css-selector-kr title-font text-xl mb-4 font-bold text-indigo-400">
          상상이 멈추지 않는 세상
        </h1>
        <p className="css-selector-kr mb-8 leading-relaxed">
          Muricture는 영감을 담은 개개인의 창작물들이 멈추지 않고 지속적으로
          만들어질 수 있는 세상을 목표로 합니다.
        </p>
      </div>
    </div>
  );
};

export default Vision;
