import React from "react";

const Service = () => {
  const boxs = [
    {
      id: 1,
      image1: (
        <svg
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title1: "Mobile Apps",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
    {
      id: 2,
      image1: (
        <svg
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" fill="none" width="20" height="20" />

          <g>
            <path d="M14 5h-2v5.71c0 1.99-1.12 2.98-2.45 2.98-1.32 0-2.55-1-2.55-2.96V5H5v5.87c0 1.91 1 4.54 4.48 4.54 3.49 0 4.52-2.58 4.52-4.5V5zm0 13v-2H5v2h9z" />
          </g>
        </svg>
      ),
      title1: "UI/Ux",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
    {
      id: 3,
      image1: (
        <svg
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" fill="none" width="20" height="20" />

          <g>
            <path d="M14 5h-2v5.71c0 1.99-1.12 2.98-2.45 2.98-1.32 0-2.55-1-2.55-2.96V5H5v5.87c0 1.91 1 4.54 4.48 4.54 3.49 0 4.52-2.58 4.52-4.5V5zm0 13v-2H5v2h9z" />
          </g>
        </svg>
      ),
      title1: "Website",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
    {
      id: 4,
      image1: (
        <svg
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>web_fill</title>
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Development"
              transform="translate(-96.000000, -48.000000)"
              fill-rule="nonzero"
            >
              <g id="web_fill" transform="translate(96.000000, 48.000000)">
                <path
                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                  id="MingCute"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M19,4 C20.1046,4 21,4.89543 21,6 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,6 C3,4.89543 3.89543,4 5,4 L19,4 Z M19,10 L5,10 L5,17 C5,17.51285 5.38604429,17.9355092 5.88337975,17.9932725 L6,18 L18,18 C18.51285,18 18.9355092,17.613973 18.9932725,17.1166239 L19,17 L19,10 Z M6,6 C5.44772,6 5,6.44772 5,7 C5,7.55228 5.44772,8 6,8 C6.55228,8 7,7.55228 7,7 C7,6.44772 6.55228,6 6,6 Z M9,6 C8.44772,6 8,6.44772 8,7 C8,7.55228 8.44772,8 9,8 C9.55228,8 10,7.55228 10,7 C10,6.44772 9.55228,6 9,6 Z M12,6 C11.4477,6 11,6.44772 11,7 C11,7.55228 11.4477,8 12,8 C12.5523,8 13,7.55228 13,7 C13,6.44772 12.5523,6 12,6 Z"
                  id="形状"
                  fill="#09244B"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ),
      title1: "Mobile Apps",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
    {
      id: 5,
      image1: (
        <svg
          fill="#000000"
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 -0.08 20 20"
          data-name="Capa 1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.69,4.31H4.31A1.61,1.61,0,0,0,2.7,5.92v8a1.61,1.61,0,0,0,1.61,1.61H15.69a1.61,1.61,0,0,0,1.61-1.61v-8A1.61,1.61,0,0,0,15.69,4.31ZM4.31,4.92H15.69a1,1,0,0,1,1,1v.72H3.31V5.92A1,1,0,0,1,4.31,4.92Zm11.38,10H4.31a1,1,0,0,1-1-1V7.25H16.69v6.67A1,1,0,0,1,15.69,14.92Z" />
          <path d="M4.31,6.18A.34.34,0,1,0,4,5.85.34.34,0,0,0,4.31,6.18Z" />
          <path d="M5.16,6.18a.34.34,0,1,0-.33-.33A.34.34,0,0,0,5.16,6.18Z" />
          <path d="M6,6.18a.34.34,0,1,0-.33-.33A.34.34,0,0,0,6,6.18Z" />
          <path d="M11,10.19l-.39.88-.4-.88s0,0-.07-.07,0-.06-.08-.08h0s-.07,0-.11,0a.17.17,0,0,0-.12,0h0s-.06.06-.08.08-.06,0-.08.07l-.39.88-.39-.88A.32.32,0,0,0,8.45,10a.3.3,0,0,0-.15.4L9,12a.38.38,0,0,0,.14.14h0l.12,0,.12,0h0A.38.38,0,0,0,9.53,12l.39-.89.4.89a.38.38,0,0,0,.14.14h0a.28.28,0,0,0,.13,0l.12,0h0a.38.38,0,0,0,.14-.14l.68-1.51a.31.31,0,0,0-.16-.4A.3.3,0,0,0,11,10.19Z" />
          <path d="M14.42,10.19l-.39.88-.4-.88s-.05,0-.07-.07,0-.06-.08-.08h0a.17.17,0,0,0-.12,0s-.07,0-.11,0h0s-.05.05-.08.08-.06,0-.07.07l-.4.88-.39-.88a.3.3,0,0,0-.4-.15.3.3,0,0,0-.16.4L12.41,12a.38.38,0,0,0,.14.14h0l.12,0a.28.28,0,0,0,.13,0h0A.38.38,0,0,0,13,12l.4-.89.39.89a.38.38,0,0,0,.14.14h0a.31.31,0,0,0,.13,0l.12,0h0a.41.41,0,0,0,.15-.14L15,10.44a.3.3,0,0,0-.16-.4A.3.3,0,0,0,14.42,10.19Z" />
          <path d="M7.56,10.19l-.39.88-.39-.88a.24.24,0,0,0-.08-.06A.23.23,0,0,0,6.62,10h0a.17.17,0,0,0-.12,0s-.07,0-.11,0h0l-.08.08s-.06,0-.07.07l-.4.88-.39-.88A.3.3,0,0,0,5,10a.31.31,0,0,0-.16.4L5.55,12a.38.38,0,0,0,.14.14h0l.12,0a.28.28,0,0,0,.13,0H6A.38.38,0,0,0,6.1,12l.4-.89.39.89a.38.38,0,0,0,.14.14h0l.12,0,.12,0h0A.38.38,0,0,0,7.45,12l.67-1.51A.3.3,0,0,0,8,10,.32.32,0,0,0,7.56,10.19Z" />
        </svg>
      ),
      title1: "Mobile Apps",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
    {
      id: 6,
      image1: (
        <svg
          className="w-13 h-13 bg-white rounded-full p-2  "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18H12.01M11 6H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title1: "Mobile Apps",
      title2: "Design",
      image2: (
        <svg
          className=" w-6 h-6  font-bold text-black  group-hover:text-orange-400"
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
      ),
    },
  ];
  return (
    <>
      <div className="md:px-[100px] px-[30px] mx-auto pt-[80px]">
        <div className="md:flex md:items-center animate__animated animate__fadeInUp  ">
          <div className="flex justify-start  items-start flex-col ">
            <div className="text-orange-400 font-bold  text-2xl ">Services</div>
            <div className="font-Syne font-bold md:w-[700px] text-3xl md:text-6xl">
              <span className="text-orange-400">M</span>y Specialties
            </div>
          </div>
          <div className="paragraf ">
            Synergistically seize front-end methods of empowerment without
            extensive core competencies. Progressively repurpose alternative
            platforms
          </div>
        </div>
        <div className="pt-15 relative">
          <div className="md:w-[1000px] grid grid-cols-1 animate__animated animate__fadeInUp animate__delay-1s  md:grid-cols-3 gap-5 shadow-2xs   ">
            {boxs.map((box, id) => {
              return (
                <div
                  key={box.index}
                  className=" group hover:bg:white  hover:text-orange-400 transition-all  flex flex-col justify-between rounded-[10px] p-7 bg-[#F5F5F5] "
                >
                  <div>{box.image1}</div>
                  <div className=" flex justify-between">
                    <div className="font-Syne font-bold text-2xl pt-10">
                      <div>{box.title1}</div>
                      <div>{box.title2}</div>
                    </div>
                    <div className="flex items-end">{box.image2}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute block animate__animated animate__zoomIn animate__delay-1s md:top-0 md:left-250  py-5 w-[315px] md:w-92 md:px-5 ">
            <div className=" md:mt-10 p-5 group  bg-black  md:h-111  rounded-2xl md:w-[450px] flex flex-col justify-between ">
              <div className="flex justify-end">
                <svg
                  className=" w-15  h-15   text-white  group-hover:text-orange-400"
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
              <div className="flex  flex-col items-start pb-5 ">
                <div className="text-orange-400 text-4xl ">
                  Tell me Something!
                </div>
                <div className="text-white font-bold ">
                  {" "}
                  HussnainShahid1202@gmail.com{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
