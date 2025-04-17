import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FFE9D9]  font-Syne md:h-[800px] relative md:w-full  md:bg-[url('/hero.png')] md:bg-no-repeat md:bg-right-bottom md:bg-contain">
      {/* Top nav */}
      <div className="flex">
        <div className="pl-[45px]"></div>
        <div className="flex w-full justify-between items-center border-b-[1px] border-black">
          <div>
            <a href="">
              <img src="./logo.png" alt="logo" />
            </a>
          </div>
          <div>
            <div className="flex justify-center items-center gap-2.5">
              <div className="text-[15px] font-bold hover:text-white transition-all">
                {" "}
                Let's talk{" "}
              </div>
              <div className="hover:text-white text-2xl">
                <span>
                  <svg
                    className=" text-[15px] font-bold text-black group-hover:text-white"
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
                </span>{" "}
              </div>
              <button className="py-5 px-10 bg-black text-white text-4xl">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Header section */}
      <section className="md:pt-[100px] md:pl-[100px] pl-[45px] pt-[50px] font-Syne  ">
        <div className="font-Syne ">
          <div className="md:text-5xl text-2xl font-bold">
            Assalam-o-Alikum, I'm
          </div>
          <div class="md:text-9xl text-4xl font-bold">Hussnain</div>
          <div class="md:text-9xl text-4xl font-bold md:pl-15">Shahid</div>
          <div className="font-bold text-[18px] py-5  md:text-2xl md:mb-8 ">
            Product Designer | Based in Pakistan
          </div>
          <div className="flex justify-start items-center gap-5  font-bold text-[18px]">
            <button className="group  flex justify-center items-center gap-2 bg-black border-[1px] border-black text-white rounded md:px-7 md:py-4 px-4 py-2 hover:text-black hover:bg-transparent ">
              Let's Talk{" "}
              <span>
                <svg
                  className="font-bold text-white group-hover:text-black"
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
              </span>{" "}
            </button>
            <button className="group  flex justify-center items-center gap-2 bg-transparent border-[1px] border-black text-black rounded md:px-7 md:py-4 px-4 py-2 hover:text-white hover:bg-black ">
              My Work
              <span>
                <svg
                  className="font-bold text-black group-hover:text-white"
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
              </span>{" "}
            </button>
          </div>
          <div className="md:flex justify-start flex-row items-center  pt-18  ">
            <div className="font-bold text-4xl"> 1.2K + </div>
            <div className=" flex md:justify-center pb-5 items-center gap-6 cursor-pointer">
              <div className="text-gray-500 text-[16px] md:px-2 md:pl-7">
                Worldwide client{" "}
              </div>
              <div className="text-gray-500 pr-2"> | </div>
              <img src="./linkedin.png" alt="linked in" />
              <img src="./connections.png" alt="Network" />
              <img src="./github.png" alt="Git Hub" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
