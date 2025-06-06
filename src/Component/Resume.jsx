import React from 'react'

const Resume = () => {
  return (
    <div className="md:py-[100px] animate__animated animate__bounceIn animate__delay-1s  px-[30px] md:px-[100px] py-[50px] pt-80  md:w-full md:flex md:flex-row  md:justify-center md:items-center md:gap-30   ">
      <div className="md:w-full  w-[315px] pb-10 ">
        <img   src="./about1.png" className="" alt="picture" />
      </div>
      <div className="md:flex flex-col  md:px-10 ">
        <div className="font-bold  text-2xl text-orange-400">
          Assalam-o-Alikum! I'm
        </div>
        <div className="leading-2 ">
          <div className="font-bold text-3xl md:text-6xl">
            <span className="text-orange-400"> H</span>ussnain Shahid,
          </div>
          <div className="font-bold text-3xl md:text-6xl">Product</div>
          <div className="font-bold text-3xl md:text-6xl">Designer</div>
          <div className="font-bold text-3xl md:text-5xl py-5">
            Based in German
          </div>
        </div>
        <div className="text-[#6B6B6B] text-[20px] ">
          Full Stack Developer with experience in front-end and back-end
          technologies, building responsive web applications, RESTful APIs, and
          databases. Passionate about clean code, problem-solving, and
          continuous learning in modern development.
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex justify-start gap-10 items-center py-10 ">
            <div>
              <div className="  font-bold text-3xl">o8</div>
              <div className="text-[#6B6B6B] text-[18px] ">Award winner</div>
            </div>
            <div>
              <div className="  font-bold text-3xl">1.2K</div>
              <div className="text-[#6B6B6B] text-[18px] ">
                Worldwide Client
              </div>
            </div>
            <div>
              <div className="  font-bold text-3xl">3.5K</div>
              <div className="text-[#6B6B6B] text-[18px] ">
                Job done successfully
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button className="bg-black text-white rounded-[7px] font-bold flex p-5 justify-center gap-2 cursor-pointer items-center  hover:text-black transition-all border-[1px] border-black group hover:bg-white black md:w-80 ">
            Download My Resume{" "}
            <span>
              <svg
                className="font-bold text-white group-hover:text-black "
                width="22px"
                height="22px"
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
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume