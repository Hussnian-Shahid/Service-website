import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
        const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        };
  return (
    <div className="w-[1200px] mx-auto h-screen   py-[80px] ">
      <div className="flex pb-50 ">
        <div className="w-[600px]">
          <div className="text-orange-400 text-2xl font-bold pt-15 ">
            Testimonial
          </div>
          <div className="text-6xl font-bold">client</div>
          <div className="text-6xl font-bold">FeedBack</div>
        </div>
        <div>
          <div className="slider-container w-[600px]  ">
            <Slider {...settings}>
              <div>
                <div className="text-8xl font-bold">,,</div>
                <div className="w-[250px] font-bold">
                  "Energistically build Aliquam vehicula nunc facilisis
                  tincidunt feugiat pellentesque sed veverra nisi fusce et
                  laoreet auur quisque pretium, ligula lectus simper urna.
                  ALiquam cihivle."
                </div>
                <div className="text-center font-bold text-2xl">
                  -John Smith-
                </div>
              </div>

              <div>
                <div className="text-8xl font-bold">,,</div>
                <div className="w-[250px] font-bold">
                  "Collaboratively harness scalable metrics via proactive
                  methodologies. Donec dignissim, sapien sed condimentum
                  ullamcorper, magna quam vulputate justo."
                </div>
                <div className="text-center font-bold text-2xl">
                  -Emily Davis-
                </div>
              </div>

              <div>
                <div className="text-8xl font-bold">,,</div>
                <div className="w-[250px] font-bold">
                  "Seamlessly generate best-of-breed e-markets with intuitive
                  web-readiness. Vivamus nec purus eget orci lacinia tempor.
                  Nulla facilisi."
                </div>
                <div className="text-center font-bold text-2xl">
                  -Michael Lee-
                </div>
              </div>

              <div>
                <div className="text-8xl font-bold">,,</div>
                <div className="w-[250px] font-bold">
                  "Monotonectally orchestrate customer directed content through
                  cutting-edge niche markets. Pellentesque tincidunt odio ut
                  elit laoreet pretium."
                </div>
                <div className="text-center font-bold text-2xl">
                  -Sophia Kim-
                </div>
              </div>

              <div>
                <div className="text-8xl font-bold">,,</div>
                <div className="w-[250px] font-bold">
                  "Efficiently exploit client-centric infrastructures without
                  cross-platform initiatives. Praesent ullamcorper metus ac
                  lectus iaculis vehicula."
                </div>
                <div className="text-center font-bold text-2xl">
                  -Liam Patel-
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <Marquee className='border-y-[1px] border-black '  speed={50} gradient={false}>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo1.svg" alt="logo1" height="50" />
          </div>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo2.svg" alt="logo2" height="50" />
          </div>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo3.svg" alt="logo3" height="50" />
          </div>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo4.svg" alt="logo4" height="50" />
          </div>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo5.svg" alt="logo5" height="50" />
          </div>
          <div style={{ margin: "0 20px" }}>
            <img src="./logo6.svg" alt="logo6" height="50" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Testimonial