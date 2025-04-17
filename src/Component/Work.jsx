import React from 'react'

const Work = () => {
  return (
    <div className="bg-[#FFE9D9] w-full h-full  ">
      <div className="w-[1200px]  mx-auto py-[100px] ">
        <div className="text-center font-bold text-orange-400 text-2xl">
          Portfolio
        </div>
        <div className="pb-10 text-center font-bold text-6xl">
          My recent work
        </div>
        <div className="flex justify-center items-center space-x-10 pb-10 ">
          <div>
            <img className="pb-3" src="./project1.png" alt="project1" />
            <div className="  flex space-x-3 pt-4">
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                APP
              </button>
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                DEVELOPMENT
              </button>
            </div>
            <div className="hover:text-orange-400 transition-all font-bold text-3xl py-4">
              Basinik Finance App
            </div>
          </div>
          <div>
            <img   className=" hover:transform-stroke pb-3" src="./project2.png" alt="project1" />
            <div className="flex space-x-3 pt-4">
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                APP
              </button>
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                DEVELOPMENT
              </button>
            </div>
            <div className="hover:text-orange-400 transition-all font-bold text-3xl py-4">
              Oxilex Dashboard Design
            </div>
          </div>
        </div>
        <div className="bg-black text-white text-center p-5 font-bold rounded-2xl hover:bg-transparent hover:text-black border-black  border-[1px] shadow-2xl  transition-all ">
          <button className="text-center ">View All Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Work