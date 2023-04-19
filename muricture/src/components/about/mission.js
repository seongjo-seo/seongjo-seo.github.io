import AnimationMission from "./AnimationMission";

const Mission = () =>{
  return(
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 ">Mission</h2>
      <AnimationMission/>
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
        <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      </div>
    </div>
  )
}

export default Mission;