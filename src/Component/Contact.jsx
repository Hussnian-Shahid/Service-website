import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-[1200px] py-[100px] mx-auto pl-5  ">
        <div className="md:flex gap-40 ">
          <div className="md:flex flex-col md:w-[450px] ">
            <div className="font-bold  md:text-2xl text-orange-400">Contact</div>
            <div className="font-bold text-4xl md:text-7xl">Let's</div>
            <div className="font-bold text-4xl md:text-7xl">connet</div>
            <div className="flex space-x-3 py-6  items-center border-b-[1px] border-[#676767]  ">
              <div>
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#676767] text-[20px] ">Email us</div>
                <div className="font-bold  text-[22px]">
                  HussnainShahid@gmail.com
                </div>
              </div>
            </div>
            <div className="flex space-x-3 py-6  items-center border-b-[1px] border-[#676767]  ">
              <div>
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#676767] text-[20px] ">Call us</div>
                <div className="font-bold text-[22px]">
                  +92 303 8564777 | +92 300 7651122
                </div>
              </div>
            </div>
            <div className="flex space-x-3 py-6  items-center border-b-[1px] border-[#676767]  ">
              <div>
                <svg
                  fill="#000000"
                  className="w-10 h-10"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#676767] text-[20px] ">
                  Office address
                </div>
                <div className="font-bold text-[22px]">
                  2715 Ash Dr.San Joe,South Dakota 6548
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <form>
              <div className="md:flex gap-10 ">
                <div className="flex flex-col py-3">
                  <label className="py-3 text-[18px]">Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-[20px] border-[1px] border-black rounded-[8px] pr-20 pl-5 py-4.5 outline-0 "
                  />
                </div>
                <div className="flex flex-col py-3">
                  <label className="py-3 text-[18px]">Email*</label>
                  <input
                    type="Email"
                    placeholder="Your Email"
                    className="text-[20px] border-[1px] border-black rounded-[8px] pr-20 pl-5 py-4.5 outline-0 "
                  />
                </div>
              </div>
              <div className="md:flex gap-10 ">
                <div className="flex flex-col py-3">
                  <label className="py-3 text-[18px]">Phone*</label>
                  <input
                    type="text"
                    placeholder="Your number"
                    className="text-[20px] border-[1px] border-black rounded-[8px] pr-20 pl-5 py-4.5 outline-0 "
                  />
                </div>
                <div className="flex flex-col py-3">
                  <label className="py-3 text-[18px]">Subject*</label>
                  <input
                    type="text"
                    placeholder="Your subject"
                    className="text-[20px] border-[1px] border-black rounded-[8px] pr-20 pl-5 py-4.5 outline-0 "
                  />
                </div>
              </div>
              <div className='flex flex-col text-[20px] ' >
                <label className='py-5' >Message</label>
                <textarea
                  className="p-5 p border-[1px] border-black rounded-[8px] "
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              <div className='flex bg-black  md:w-[170px] justify-center text-white group items-center gap-4 p-5 rounded py-5 my-5 border-[1px] border-black hover:bg-white hover:text-black transition-all     ' >
                <div>Submit</div>
                <div>
                  <svg
                    className="font-bold text-white group-hover:text-black"
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
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact