
const Team = () =>{
  return(
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 ">
          <h1 className="text-2xl font-bold title-font mb-4 text-gradient-to-r from-violet-500 to-blue-500 tracking-widest">TEAM</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-1/2 h-max object-cover object-center sm:mb-0 mb-4" src="./team/team_one.jpg"/>
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-bold  text-lg text-gray-900">서성조</h2>
                <h3 className="text-gray-500 font-bold mb-3">Project Owner</h3>
                <p className="mb-4">새로운 생각이나 개념을 발견하거나 기존에 있던 생각이나 개념들을 조합하여 새로이 생각해내는 특성을 창의력이라 합니다.
                                    창의력이 멈추지 않도록 환경을 구축하는 것을 바라보고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team_img" className="flex-shrink-0 rounded-lg w-2/5 h-max object-cover object-center sm:mb-0 mb-4" src="./team/team_two.jpg"/>
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-bold text-lg text-gray-900">민경남</h2>
                <h3 className="text-gray-500 font-bold mb-3">Marketer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Team;