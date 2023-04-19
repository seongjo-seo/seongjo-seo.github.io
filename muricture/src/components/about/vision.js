import AnimationVision from "./AnimationVision";

const Vision = () =>{
  return(
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 ">Vision</h2>
        <AnimationVision/>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">상상이 멈추지 않는 세상</h1>
          <p class="mb-8 leading-relaxed">Muricture는 AI시대에 사람들이 창의력이 멈추지 않고,<br/>삶을 살아갈 수 있는 것을 목표로 하고 있어요.</p>
        </div>
      </div>
  )
}

export default Vision;