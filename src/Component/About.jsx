import React, { useState } from "react";

const About = () => {
  const tabs = ["About", "Experience", "Education", "Skills", "Awards"];
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="px-5 md:px-10 lg:px-[100px] mx-auto pb-[100px] flex flex-col md:flex-row gap-10 md:gap-20 pt-[50px]">
        <div className="w-full md:w-[350px]">
          <div className="text-orange-400 font-bold text-2xl">Resume</div>
          <div className="py-5 text-4xl md:text-6xl font-bold">
            <span className="text-orange-400">A</span>ll over my detail find here...
          </div>
          <div className="flex flex-col gap-y-4">
            {tabs.map((tab, index) => (
              <div key={`tab${index}`} className="flex justify-between items-center bg-white">
                <button
                  onClick={() => setactiveTab(index)}
                  className={`group font-bold flex justify-between items-center w-full rounded-[5px] p-3.5 transition-all duration-300 ${
                    activeTab === index
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {tab}
                  <svg
                    className={`transition-all duration-300 ${
                      activeTab === index ? "text-white" : "text-black group-hover:text-white"
                    }`}
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z" />
                    <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[850px]">
          {activeTab === 0 && <Aboutme />}
          {activeTab === 1 && <Experience />}
          {activeTab === 2 && <Education />}
          {activeTab === 3 && <Skills />}
          {activeTab === 4 && <Award />}
        </div>
      </div>
    </div>
  );
};

export default About;

const Education = () => {
    return (
      <div>
        <div className="font-bold text-3xl pl-5 md:text-5xl py-3 pb-10">
          {" "}
          Education
        </div>
        <div className="flex flex-col gap-y-5 px-5">
          <div className="bg-[#FFFFFF] rounded flex gap-5 p-5 items-center ">
            <div className="text-gray-400">003/2008-07/2011</div>
            <div>
              <div className="md:text-2xl">Axtra</div>
              <div className="md:text-3xl text-[22px] font-bold">
                BA Business Management
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded flex gap-5 p-5 items-center ">
            <div className="text-gray-400">003/2008-07/2011</div>
            <div>
              <div className="md:text-2xl">Axtra</div>
              <div className="md:text-3xl text-[22px] font-bold">
                BA Business Management
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded flex gap-5 p-5 items-center ">
            <div className="text-gray-400">003/2008-07/2011</div>
            <div>
              <div className="md:text-2xl">Axtra</div>
              <div className="md:text-3xl text-[22px] font-bold">
                BA Business Management
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const Aboutme = () => {
    const lists = [
      {
        one: "Name",
        two: "Hussnain Shahid",
      },
      {
        one: "Nationality",
        two: "Pakistan",
      },
      {
        one: "Phone",
        two: "+93 303 8765432",
      },
      {
        one: "Email",
        two: "hussnian@gmail.com",
      },
      {
        one: "Experience",
        two: "12+ Years",
      },
      {
        one: "Freelance",
        two: "Available",
      },
      {
        one: "Language",
        two: "English,Urdu,",
      },
    ];
  return (
    <div>
      <div className="font-bold text-3xl px-5 md:text-5xl py-3 ">Based in German</div>
      <div className="text-[#686868] px-5  text-[20px] md:w-[800px] py-6 " >
        I am a full stack developer with solid experience in both front-end and
        back-end technologies. I build responsive websites, scalable APIs, and
        efficient databases. I enjoy solving complex problems and continuously
        improving my skills to deliver high-quality solutions.
      </div>
      <div className=" ">
        {lists.map((list, index) => (
          <div key={index} className="flex items-center">
            <div className="text-[#434343] pl-5 text-[20px] w-[140px] py-4 ">{list.one}</div>
            <div className="font-bold text-2xl">{list.two}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
    const boxs = [
      {
        id: 1,
        data: "03/216-Running",
        title: "Axtra",
        tyle1: "Lead Digital Marketer",
        type2: "",
      },
      {
        id: 2,
        data: "03/2008-07.2011",
        title: "Axtra",
        tyle1: "JavaScript Developer",
        type2: "",
      },
      {
        id: 3,
        data: "03/2000-05/3000",
        title: "Axtra",
        tyle1: "Product designer",
        type2: "",
      },
      {
        id: 4,
        data: "Currently",
        title: "Axtra",
        tyle1: "UX Researcher",
        type2: "",
      },
    ];

    return (
      <div  >
        <div className="font-bold text-3xl pl-5 md:text-5xl  py-3 pb-10">Experience</div>
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-5">
          {boxs.map((box, index) => (
            <div
              className="bg-[#ebeae9] hover:bg-white transition-all p-5   rounded-2xl "
              key={box.id}
            >
              <div className="text-[18px] py-4  "> {box.data} </div>
              <div className="text-2xl"> {box.title} </div>
              <div className="text-3xl font-bold"> {box.tyle1} </div>
              <div className="text-3xl font-bold"> {box.type2} </div>
            </div>
          ))}
        </div>
      </div>
    );
}
const Award = () => {
    const boxs = [
      {
        id: 1,
        data: "03/216-Running",
        title: "Axtra",
        tyle1: "Lead Digital Marketer",
        type2: "",
      },
      {
        id: 2,
        data: "03/2008-07.2011",
        title: "Axtra",
        tyle1: "JavaScript Developer",
        type2: "",
      },
      {
        id: 3,
        data: "03/2000-05/3000",
        title: "Axtra",
        tyle1: "Product designer",
        type2: "",
      },
      {
        id: 4,
        data: "Currently",
        title: "Axtra",
        tyle1: "UX Researcher",
        type2: "",
      },
    ];

    return (
      <div>
        <div className="font-bold text-3xl pl-5 md:text-5xl  py-3 pb-10">
          Awards
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-5">
          {boxs.map((box, index) => (
            <div
              className="bg-[#ebeae9] hover:bg-white transition-all p-5   rounded-2xl "
              key={box.id}
            >
              <div className="text-[18px] py-4  "> {box.data} </div>
              <div className="text-2xl"> {box.title} </div>
              <div className="text-3xl font-bold"> {box.tyle1} </div>
              <div className="text-3xl font-bold"> {box.type2} </div>
            </div>
          ))}
        </div>
      </div>
    );
}
const Skills = () => {
    const language = [
        {
            image:"./atom.png",
            title:"React JS",
            done:"(90%)"
        },
        {
            image:"./js.png",
            title:"J.Script",
            done:"(80%)"
        },
        {
            image:"./css.png",
            title:"CSS",
            done:"(85%)"
        },
        {
            image:"./figma.png",
            title:"Figma",
            done:"(65%)"
        },
        {
            image:"./picture.png",
            title:"Framer",
            done:"(76%)"
        },
        {
            image:"./back.png",
            title:"Web Dev",
            done:"(95%)"
        },
    ]
    return (
      <div>
        <div className="font-bold text-3xl px-5  md:text-5xl  py-3 pb-10">
          Skills
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-3  gap-5">
          {language.map((languag, index) => (
            <div
              className="bg-[#eaeaea] hover:bg-white transition-all p-5   rounded-2xl flex justify-center items-center gap-5  "
              key={languag.index}
            >
              <div>
                <img
                  className="text-[18px] py-4  "
                  src={languag.image}
                  alt=""
                />{" "}
              </div>
              <div className="flex justify-center flex-col items-center">
                <div className="text-2xl font-bold  "> {languag.title} </div>
                <div className="font-bold"> {languag.done} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}