import React from 'react'
import Header from './Header';

const Footer = () => {
  
  return (
    <div className=" w-full bg-black">
      <div className=" text-white py-[50px]  bg-black mx-auto md:px-[100px] px-[30px] ">
        <div className="md:flex  justify-center items-center md:gap-5 space-y-5 rounded-2xl ">
          <div className='' >
            <div className="font-bold text-3xl md:text-6xl pt-[30px] pb-[25px]">
              Let's work together
            </div>
            <div className="md:flex md:justify-start items-center md:space-x-1">
              <div className="font-bold text-2xl">
                Based in Germany <span className="hidden">|</span>{" "}
              </div>
              <div className="flex md:justify-center items-center space-x-4 md:space-x-1">
                <img src="./linkedin (1).png" alt="linked in" />
                <img src="./web.png" alt="Network" />
                <img src="./github (1).png" alt="Git Hub" />
              </div>
            </div>
          </div>
          <div
            className="border-[1px]  border-white
          rounded-2xl p-5 md:w-120 md:mt-[23px] "
          >
            <div className="flex flex-col group item  ">
              <div className="font-bold md:text-2xl pb-30">
                Looking for a hectic designer?
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-orange-400 text-[20px] ">
                  hello@gmail.com
                </div>
                <div>
                  <svg
                    className="font-bold text-white group-hover:text-orange-400"
                    width="25px"
                    height="25px"
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
          <div
            className="border-[1px] md:w-120   border-white
          rounded-2xl p-5"
          >
            <div className="flex flex-col group item  ">
              <div className="font-bold md:text-2xl pb-30">
                Want a more in-depth look ?
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-orange-400 text-[20px] ">
                  +92 303 8123789
                </div>
                <div>
                  <svg
                    className="font-bold text-white group-hover:text-orange-400"
                    width="25px"
                    height="25px"
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
        <div className="font-bold text-6xl text-center md:text-[126px] md:py-15 py-10 text-[#e8d9d9] border-b-[1px] border-white ">
          Hussnain Shahid
        </div>
        <div className=" text-white md:flex justify-between items-center py-5 ">
          <div className="text-[20px]">
            &#169;2025 Hussnain Shahid, Al Rights Reserved
          </div>
          <div className=" hover:text-orange-400 cursor-pointer  space-x-4 transition-all  ">
            <a href="/">
              <div className="flex gap-5 hover:border-[1px] hover:border-white md:justify-center items-center group ">
                <div className="md:p-4 py-4">Back to top </div>
                <div>
                  <svg
                    className="-rotate-45 text-[15px] font-bold text-white group-hover:text-orange-400 "
                    width="18px"
                    height="18px"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer