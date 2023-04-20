import AnimationMission from "./AnimationMission";

const Mission = () =>{
  return(
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-indigo-500">Mission</h2>
      <AnimationMission/>
      <div class="text-center lg:w-2/3 w-full">
        <p class="mb-8 leading-relaxed">생각이 멈추지 않는 것은 창의성과 독창성의 발휘에 있어서 매우 중요한 요소입니다. 우리는 이러한 창의성과 독창성이 끊임없이 발전할 수 있도록, 올바른 환경을 구축하고자 합니다. 이를 위해 우리는 자유로운 사고와 실험, 그리고 창의성을 촉진하는 문화와 체제를 만들어내고자 노력합니다. 이러한 환경에서는 새로운 아이디어와 독창적인 작품들이 탄생하며, 이를 통해 우리는 세상을 더욱 아름답고 창조적인 곳으로 만들어나갈 수 있습니다.</p>
      </div>
    </div>
  )
}

export default Mission;