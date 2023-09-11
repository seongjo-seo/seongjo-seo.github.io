const Team = () => {
  return (
    <div className="container px-5 py-24 mx-auto  text-gray-900 dark:text-gray-300">
      <div className="flex flex-col text-center w-full mb-20 ">
        <h1 className="css-selector-en text-2xl font-bold title-font mb-4 text-gradient-to-r text-violet-500 to-blue-500 tracking-widest">
          Our Team
        </h1>
      </div>
      <div className="">
        {/* flex flex-wrap */}
        <div className="">
          {/* p-4 lg:w-1/2 */}
          <div className="">
            {/* w-full sm:w-3/4 sm:h-3/4 bg-white dark:bg-dark-mode dark:text-white flex-col justify-start items-center inline-flex */}
            <div className="">
              <div className="">
                <img
                  alt="team"
                  className=""
                  src="./team_photos/members/SEONGJO_SEO.jpg"
                />
              </div>
              <div className="">
                <h1 className="css-selector-en font-bold mb-8">
                  Project Owner
                </h1>
                <h4 className="css-selector-kr title-font font-bold  text-lg ">
                  서성조
                </h4>
              </div>
            </div>
            <div className="">
              <img
                alt="team"
                className=""
                src="./team_photos/members/SORIN.png"
              />
              <div className="">
                <h1 className="css-selector-en font-bold mb-4 w-full">
                  Translation Lead
                </h1>
                <h4 className="css-selector-kr title-font font-bold text-lg">
                  소린
                </h4>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  alt="team"
                  className=""
                  src="./team_photos/members/SAKURAGI_YURI.png"
                />
              </div>
              <div className="">
                <h1 className="css-selector-en font-bold mb-4 w-full">
                  Linguist
                </h1>
                <h4 className="css-selector-kr title-font font-bold text-lg">
                  SAKURAGI YURI(櫻木友理)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;

{
  /* <div className="flex flex-wrap">
        <div className="p-4 lg:w-1/2">
          <div className="w-full sm:w-3/4 sm:h-3/4 bg-white dark:bg-dark-mode dark:text-white flex-col justify-start items-center inline-flex">
            <div className="flex sm:flex-row sm:justify-start sm:text-left">
              <div className="x-4 y-10">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-1/2 h-max object-cover object-center sm:mb-0 mb-4"
                  src="./team_photos/members/SEONGJO_SEO.jpg"
                />
              </div>
              <div className="flex-grow sm:pl-8">
                <h1 className="css-selector-en font-bold mb-8">
                  Project Owner
                </h1>
                <h4 className="css-selector-kr title-font font-bold  text-lg ">
                  서성조
                </h4>
              </div>
            </div>
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-1/2 h-max object-cover object-center sm:mb-0 mb-4"
                src="./team_photos/members/SORIN.png"
              />
              <div className="flex-grow sm:pl-8">
                <h1 className="css-selector-en font-bold mb-4 w-full">
                  Translation Lead
                </h1>
                <h4 className="css-selector-kr title-font font-bold text-lg">
                  소린
                </h4>
              </div>
            </div>
            <div className="">
              <div className="x-10 y-10">
                <img
                  alt="team"
                  className=""
                  src="./team_photos/members/SAKURAGI_YURI.png"
                />
              </div>
              <div className="">
                <h1 className="css-selector-en font-bold mb-4 w-full">
                  Translation Lead
                </h1>
                <h4 className="css-selector-kr title-font font-bold text-lg">
                  SAKURAGI YURI(櫻木友理)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
