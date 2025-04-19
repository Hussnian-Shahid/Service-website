import React from 'react'

const Work = () => {
  return (
    <div className="bg-[#FFE9D9] ">
      <div className="md:px-[100px]  mx-auto py-[100px] ">
        <div className="animate__animated animate__fadeInUp ">
          <div className="text-center font-bold text-orange-400 text-2xl">
            Portfolio
          </div>
          <div className="pb-10 text-center font-bold text-3xl md:text-6xl">
            <span className="text-orange-400">M</span>y recent work
          </div>
        </div>
        <div className="md:flex px-7.5 justify-center items-center animate__animated animate__fadeInUp animate__delay-1s md:gap-10 ">
          {/* project 1 */}
          <div className="">
            <img
              className="pb-3 md:w-full"
              src="./project1.png"
              alt="project1"
            />
            <div className="  flex space-x-3 pt-4">
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4  ">
                APP
              </button>
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                DEVELOPMENT
              </button>
            </div>
            <div className="hover:text-orange-400 transition-all font-bold text-3xl py-4 pb-10 ">
              Basinik Finance App
            </div>
          </div>
          {/* project 2 */}
          <div>
            <img className="pb-3" src="./project2.png" alt="project1" />
            <div className="  flex space-x-3 pt-4">
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4  ">
                APP
              </button>
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                DEVELOPMENT
              </button>
            </div>
            <div className="hover:text-orange-400 transition-all font-bold text-3xl py-4 pb-10 ">
              Oxilex Dashboard Design
            </div>
          </div>
        </div>
        <div className="bg-black text-white text-center p-5 font-bold rounded-2xl hover:bg-transparent hover:text-black border-black  border-[1px] duration-300 mx-5  transition-all ">
          <button className="text-center ">View All Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Work