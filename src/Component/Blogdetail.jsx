import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Blog from './Blog';

const Blogdetail = () => {
  const about = [
    {
      name:"Written",
      about:"Mark Henry",
    },
    {
      name:"Category",
      about:"User Experience",
    },
    {
      name:"Date",
      about:"02/08/2023",
    },
  ]
  return (
    <div className="md:w-full">
      <Navbar />
      <div className="bg-[#ffe9d9] md:h-[700px] ">
        <div className="md:w-[1200px] px-5  md:mx-auto  ">
          <div className="font-bold text-3xl md:text-6xl md:pt-25 pt-15">
            Design the perfect feature comparison tabel
          </div>
          <div className="font-bold md:text-6xl text-3xl pb-20"></div>
          <div>
            <img className="w-full" src="/banner2.png" alt="banner" />
          </div>
          <div className="border-b-[1px] border-[#d4cbcb] ">
            <div className="grid md:grid-cols-3 w-[800px]  py-5 px-5 ">
              {about.map((abo, index) => {
                return (
                  <div key={abo.index} className="flex">
                    <div className="flex flex-col">
                      <div className="text-[#676767]">{abo.name}</div>
                      <div className="font-bold text-[20px]">{abo.about}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="font-bold text-3xl py-10">About the position</div>
          <div className="text-[24px] pb-12 text-[#676767]">
            "Everyone in my team works towards the samegoal. This enabled our
            teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize."
          </div>
          <div className="text-[24px] pb-12 text-[#676767]">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself"
          </div>
          <div className="text-[24px] pb-12 text-[#676767]">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided."
          </div>
          <div className="md:flex justify-center items-center gap-14 pb-14 shadow-2xl">
            <div>
              <img className="w-full h-full pb-5" src="/pic1.png" alt="" />
            </div>
            <div>
              <img className="w-full h-full" src="/pic2.png" alt="" />
            </div>
          </div>
          <div className="font-bold text-3xl py-10">1.Learning the basics</div>
          <div className="text-[24px] pb-12 text-[#676767]">
            "Everyone in my team works towards the samegoal. This enabled our
            teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize."
          </div>
          <div className="text-[24px] pb-12 text-[#676767]">
            " But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself "
          </div>
          <div className="font-bold text-3xl py-10">2.Basic to Advance</div>
          <div className="text-[24px] pb-12 text-[#676767]">
            "Everyone in my team works towards the samegoal. This enabled our
            teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize."
          </div>
          <div className="text-[24px] pb-12 text-[#676767]">
            " But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself "
          </div>
          <div className="md:flex justify-between items-center py-5   ">
            <div className="md:flex md:justify-center md:items-center">
              <div className="text-[20px]">Share:</div>
              <div className="flex justify-center items-center space-x-5 space-y-5  ">
                <img src="/facebook.png" alt="" />
                <img src="/twitter (1).png" alt="" />
                <img src="/linkedin (2).png" alt="" />
                <img src="/whatsapp.png" alt="" />
                <img src="/link.png" alt="" />
                <img src="/heart.png" alt="" />
              </div>
            </div>
            <div className="  flex space-x-3 ">
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4  ">
                APP
              </button>
              <button className="hover:bg-black hover:text-white border rounded-[12px] px-4">
                DEVELOPMENT
              </button>
            </div>
          </div>
        </div>
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default Blogdetail