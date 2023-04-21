import AnimationVision from "./AnimationVision";

const Vision = () =>{
  return(
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h2 className="text-3xl font-bold text-indigo-500 mb-4 ">Vision</h2>
        <AnimationVision/>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-indigo-400">상상이 멈추지 않는 세상</h1>
          <p className="mb-8 leading-relaxed">Muricture는 지금의 AI 시대에서도 인간의 창의력과 상상력이 끊임없이 발전하고, 새로운 아이디어와 창조적인 작품들이 탄생할 수 있는 환경을 제공합니다. 우리는 이러한 환경을 통해 사람들이 더욱 창의적이고 독창적인 삶을 살아갈 수 있도록 지원하고자 합니다. 끊임없이 발전하는 기술과 인간의 창의성이 상호작용하여, 미래의 삶을 더욱 풍요롭고 창조적으로 만들어나갈 수 있는 가능성을 함께 모색하고자 합니다.</p>
        </div>
      </div>
  )
}

export default Vision;