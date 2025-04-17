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
          slidesToShow: 1,
          slidesToScroll: 1,
        };
  return (
    <div className="md:w-[1200px] mx-auto py-[80px] ">
      <div className="md:flex pb-50 ">
        <div className="w-[600px]">
          <div className="text-orange-400 px-5 text-2xl font-bold pt-15 ">
            Testimonial
          </div>
          <div className="md:text-6xl text-5xl px-5 font-bold">client</div>
          <div className="md:text-6xl text-5xl px-5 font-bold">FeedBack</div>
        </div>
        <div>
          <div className="slider-container px-5 md:w-[600px]  ">
            <Slider {...settings}>
                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "In today’s fast-moving world, innovation leads the way.
                    Embracing change and adapting to evolving markets helps
                    businesses succeed. Building with empathy and strategy
                    ensures growth. Every decision counts and each effort leads
                    to transformation. Staying motivated and focused drives
                    long-term success across all industries and cultures."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -John Smith-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Technology empowers us to dream bigger and act smarter.
                    Collaborating across diverse teams fuels creativity and
                    efficiency. Learning never stops, and curiosity leads to
                    solutions. Challenges become opportunities when approached
                    with the right mindset. Success favors the bold, especially
                    those who continuously improve their skills and outlook."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Emily Johnson-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Every project starts with a vision. Aligning passion with
                    purpose can shape remarkable outcomes. Consistency and
                    dedication form the foundation of lasting success. Building
                    authentic connections in business strengthens impact. Great
                    achievements stem from small efforts repeated day in and day
                    out, with honesty, patience, and determination."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Michael Lee-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Ideas only grow when nurtured by action. Focused execution
                    turns imagination into reality. Real success lies not just
                    in profits, but in positive change. Teams thrive when values
                    align. Creating user-centered solutions brings lasting
                    value. With the right mindset, even the impossible becomes
                    achievable in today’s digital era."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Sophia Williams-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Hard work, consistency, and vision lead to breakthroughs.
                    Adaptability helps us face uncertainties with strength.
                    Encouraging a growth mindset in teams elevates outcomes.
                    Shared goals build trust and drive momentum. Each challenge
                    teaches a new lesson, helping us grow stronger, smarter, and
                    more equipped to serve others better."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -David Kim-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Solutions emerge when creativity meets logic. Listening to
                    user needs helps tailor better experiences. Great leadership
                    means empowering others to lead. Progress often comes from
                    persistence. Even the smallest improvement can spark a chain
                    of growth. Strong culture, communication, and clarity are
                    essential to building sustainable success stories today."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Olivia Martinez-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Design is more than visuals—it’s problem-solving. True
                    innovation simplifies life, not complicates it. Empathy is
                    the key to connection, especially in technology. Clear goals
                    sharpen our focus. When we align our energy with purpose,
                    magic happens. Every line of code, every decision, builds
                    toward something meaningful and long-lasting."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Ethan Patel-
                  </div>
                </div>

                <div>
                  <div className="text-8xl font-bold">,,</div>
                  <div className="font-bold">
                    "Customer satisfaction begins with listening. Honest
                    feedback helps refine products. Authenticity builds loyalty.
                    Delivering consistent value creates a strong reputation.
                    Sustainable growth happens when business meets purpose. Each
                    success story is built one step at a time. Patience and
                    effort, together, can accomplish more than raw talent ever
                    will."
                  </div>
                  <div className="text-center font-bold text-2xl">
                    -Ava Thompson-
                  </div>
                </div>
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <Marquee
          className="border-y-[1px] border-black px-5 "
          speed={50}
          gradient={false}
        >
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