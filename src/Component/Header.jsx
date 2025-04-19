import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className=" bg-[#FFE9D9]  font-Syne relative md:w-full  ">
      <div className="animate__animated animate__fadeInRight md:bg-[url('/hero.png')] md:bg-no-repeat md:bg-right-bottom md:bg-contain">
        <Navbar />
        <section className="  md:pt-[100px] md:pl-[100px]  py-[50px] font-Syne md:max-w-full ">
          <div className="font-Syne ">
            <div className="md:text-5xl text-2xl font-bold text-center md:text-start animate__animated animate__fadeInLeft animate__delay-1s">
              Assalam-o-Alikum, I'm
            </div>
            <div class="animate__animated animate__fadeInLeft animate__delay-1s md:text-start text-center md:text-9xl text-4xl font-bold">
              <span className="text-orange-400">H</span>ussnain
            </div>
            <div class="animate__animated animate__fadeInLeft animate__delay-1s text-center md:text-9xl text-4xl font-bold md:text-start ">
              Shahid
            </div>
            <div className="font-bold text-[18px] animate__animated animate__fadeInLeft animate__delay-1s py-5  md:text-2xl md:mb-8 pl-7.5 ">
              Product Designer | Based in Pakistan
            </div>
            <div className="flex animate__animated animate__fadeInLeft animate__delay-1s md:justify-start justify-center items-center gap-3 transition-all  font-bold  md:text-[20px] text-center">
              <button className="group  flex  gap-2 bg-black border-[1px] border-black text-white rounded-[8px] md:px-7 md:py-4 px-4 py-2 hover:text-black hover:bg-transparent ">
                Let's Talk{" "}
                <span>
                  <svg
                    className="font-extrabold text-white group-hover:text-black"
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
                </span>{" "}
              </button>
              <button className="group  flex justify-center items-center gap-2 bg-transparent border-[1px] border-black text-black rounded-[8px] md:px-7 md:py-4 px-4 py-2 hover:text-white hover:bg-black ">
                My Work
                <span>
                  <svg
                    className="font-bold text-black group-hover:text-white"
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
                </span>{" "}
              </button>
            </div>
            <div className="flex animate__animated animate__fadeInLeft animate__delay-1s md:justify-start md:flex-row flex-col items-center  pt-18 pl-7.5  ">
              <div className="font-bold text-4xl"> 1.2K + </div>
              <div className=" flex md:justify-center  items-center gap-6 cursor-pointer">
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
    </div>
  );
};

export default Header;
