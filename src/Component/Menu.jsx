import React from 'react'
import { Link } from 'react-router-dom';
const Menu = ({ closeFunction }) => {
  return (
    <div className="flex absolute   w-full justify-end ">
      <div className="md:w-[460px] w-[350px] pl-8 md:h-screen   absolute bg-black  ">
        <div className="flex justify-between items-center border-b-[1px] border-white ">
          <div>
            <img src="/logomenu.png" alt="" />
          </div>
          <div>
            <button
              onClick={() => closeFunction()}
              className="py-5 px-7.5 bg-orange-400 text-white text-4xl"
            >
              <svg
                className="w-[36px] "
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                    fill="#ffffff"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div
          onClick={() => closeFunction()}
          className=" cursor-pointer  text-white pr-8 font-bold text-[18px] pt-20    mb-4   "
        >
          <Link to="/">
            <div
              onClick={() => closeFunction()}
              className="  flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  "
            >
              <div>Home</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/about">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>About</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/project">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>Project</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/projectdetail">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>Project Detail</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/blog">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>BLog</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/blogdetail">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>Blog Detail</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
          <Link to="/contact">
            <div className="flex justify-between group border-b-[1px] border-[#ada3a3] hover:text-orange-400 transition-all py-4  ">
              <div>Contact</div>
              <div>
                <svg
                  className=" text-[15px] font-bold text-white group-hover:text-orange-400 "
                  width="20px"
                  height="20px"
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
          </Link>
        </div>
        <div className="flex justify-start items-center space-x-4 py-13">
          <img src="./linkedin (1).png" alt="linked in" />
          <img src="./web.png" alt="Network" />
          <img src="./github (1).png" alt="Git Hub" />
        </div>
      </div>
    </div>
  );
};

export default Menu