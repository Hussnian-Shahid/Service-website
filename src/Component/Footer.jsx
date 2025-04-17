import React from 'react'

const Footer = () => {
  return (
    <div className="w-full  bg-black">
      <div className="md:w-[1200px] text-white py-[100px] bg-black mx-auto ">
        <div className="grid grid-cols-1 space-y-5 px-5 md:grid-cols-3 space-x-5 rounded-2xl ">
          <div  >
            <div className="font-bold text-6xl pb-[50px]">
              Let's work together
            </div>
            <div className="flex justify-center items-center md:space-x-4">
              <div className="font-bold text-2xl">Based in Germany | </div>
              <div className="flex justify-center items-center space-x-4">
                <img src="./linkedin (1).png" alt="linked in" />
                <img src="./web.png" alt="Network" />
                <img src="./github (1).png" alt="Git Hub" />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-white rounded-2xl p-5 group ">
            <div className="flex justify-between space-y-22 flex-col">
              <div className="font-bold text-2xl">
                Looking for a hectic design?
              </div>
              <div className="flex justify-between items-center space-x-5">
                <div className="text-orange-400 font-bold text-2xl">
                  {" "}
                  hello@gmail.com
                </div>
                <div>
                  <svg
                    className="font-bold text-white group-hover:text-orange-400 transition-all"
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
                    />
                    <path
                      fill="currentColor"
                      d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px]  border-white rounded-2xl p-5 group ">
            <div className="flex justify-between space-y-22 flex-col">
              <div className="font-bold text-2xl">
                What a more in-depth look at my history?
              </div>
              <div className="flex justify-between items-center space-x-5">
                <div className="text-orange-400 font-bold text-2xl">
                  +92 303 4567910{" "}
                </div>
                <div>
                  <svg
                    className="font-bold text-white group-hover:text-orange-400 transition-all"
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
                    />
                    <path
                      fill="currentColor"
                      d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-5xl px-5 md:text-center md:text-[130px] py-5 text-[#e8d9d9] border-b-[1px] border-white ">
          Hussnain Shahid
        </div>
        <div className=" text-white flex justify-between items-center py-5 ">
          <div className="text-[20px]">
            &#169;2025 Hussnain Shahid, Al Rights Reserved
          </div>
          <div className=" hover:text-orange-400 cursor-pointer  space-x-4 ">
            <div>Back to top </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer