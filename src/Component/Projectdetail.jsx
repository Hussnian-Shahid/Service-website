import React from "react";
import Navbar from "./Navbar";
import Related from "./Related";
import Footer from "./Footer";

const Projectdetail = () => {
  const detail = [
    {
      name: "Client",
      desc: "Mashorom",
    },
    {
      name: "Category",
      desc: "User Experience",
    },
    {
      name: "Tools",
      desc: "Figma,webflow",
    },
    {
      name: "Start date",
      desc: "09/01/2020",
    },
    {
      name: "End date",
      desc: "09/01/2020",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#ffe9d9] w-full pl-5 ">
        <div className="md:w-[1200px] md:mx-auto pt-[70px] ">
          <div className="grid md:grid-cols-2 grid-cols-1  ">
            <div>
              <div className="flex  items-center md:space-x-3 px-5 pt-4">
                <div className="flex flex-row-reverse justify-center items-center">
                  <div>UI Design</div>
                  <div>
                    <svg
                      className="w-8 h-8 text-orange-400"
                      viewBox="0 0 24 24"
                      fill="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                        fill="#000000"
                      />
                    </svg>{" "}
                  </div>
                </div>
                <div className="text-orange-400 flex justify-center flex-row-reverse items-center">
                  <div>03/may/2008</div>
                  <div>
                    <svg
                      className="w-8 h-8 text-orange-400"
                      viewBox="0 0 24 24"
                      fill="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                        fill="#FFA654"
                      />
                    </svg>{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-x-4 font-bold text-4xl md:text-5xl ">
                <div>Mendero fintect</div>
                <div>dashboard design</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {detail.map((ma, index) => (
                <div key={index} className="flex flex-col p-2">
                  <div className="text-[#676767]">{ma.name}</div>
                  <div className="font-bold">{ma.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:pt-[150px] pt-[50px] pr-5  md:flex justify-center ">
            <img src="/banner.png" alt="bannerimage" />
          </div>
          <div className="md:pl-[58px] ">
            <div className="font-bold text-3xl pt-[40px] ">Overview</div>
            <div className=" text-[#676767] text-xl pt-[40px] pr-5">
              "Minimalism combined with elements of french typography and
              brutalism helped us to realize the site exactly as we imagined
              with the client at the beginning: visually restrained, but
              stylish. Informative and pleasant to use, with an elegant
              aftertaste of a serious financial institution. Combined with
              elements of french typography and visually restrained, but
              stylish. Informative and pleasant to use, with an elegant
              aftertaste of a serious financial institutional client, and close
              collaboration."
            </div>
            <div className='className=" text-[#676767] text-xl py-[40px] pr-5 '>
              "That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them want more."
            </div>
            <ul className=" decoration-1 font-bold text-2xl">
              <li>Advantage</li>
              <li>Accomplished</li>
              <li>Marketplace startups</li>
              <li>SaaS startups</li>
            </ul>
            <div className="font-bold text-3xl pt-[40px] ">Typography</div>
            <div className=" text-[#676767] text-xl pt-[40px] pr-5">
              " The basic idea was to find a balance between the thin, wispy
              sans-serif used to indicate a ‘futuristic‘ tone, and a bold,
              masculine font synonymous with ‘construction‘. We came up with
              something in the middle, leaning towards lighter-weighted fonts,
              but still with a hint of that blocky ‘construction’ vibe. We use
              Chaney for general display and when we want to drive attention to
              the content, and the technical and geometric Sora font for the
              body copy and paste overall hierachy. "
            </div>
            <div className="md:flex md:space-x-10   md:p-5 pr-5 pt-5 md:py-10">
              <div>
                <img className="pb-5" src="post1.png" alt="" />
              </div>
              <div>
                <img src="post2.png" alt="" />
              </div>
            </div>
            <div className="font-bold text-3xl pt-[40px] pl-5 ">Conclusion</div>
            <div className="md:flex md:space-x-10 md:p-5 pr-5 py-10 text-[20px] text-[#676767] ">
              <div>
                "The basic idea was to find a balance between the thin, wispy
                sans-serif used to indicate a ‘futuristic‘ tone, and a bold,
                masculine font synonymous with ‘construction‘. We came up with
                something in the middle, leaning towards lighter-weighted fonts,
                but still with a hint of that blocky ‘construction’ vibe. We use
                Chaney for general display and when we want to drive attention
                to the content, and the technical and geometric Sora font for
                the body copy and paste overall hierachy."
              </div>
              <div>
                " The basic idea was to find a balance between the thin, wispy
                sans-serif used to indicate a ‘futuristic‘ tone, and a bold,
                masculine font synonymous with ‘construction‘. We came up with
                something in the middle, leaning towards lighter-weighted fonts,
                but still with a hint of that blocky ‘construction’ vibe. "
              </div>
            </div>
          </div>
        </div>
        <Related />
        <Footer />
      </div>
    </>
  );
};

export default Projectdetail;
