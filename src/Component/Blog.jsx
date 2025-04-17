import React from "react";

const Blog = () => {
  const blog = [
    {
      image: "./blog1.png",
      title: "UI Design",
      date: "03 May 2019",
      desc: "Right-to-left behind development in mobile web design",
    },
    {
      image: "./blog2.png",
      title: "UI Design",
      date: "03 May 2019",
      desc: "Connect Craft: Reading the smart experience",
    },
    {
      image: "./blog3.png",
      title: "UI Design",
      date: "03 May 2019",
      desc: "Sustainable skincare a brighter tomorrow",
    },
    {
      image: "./blog4.png",
      title: "UI Design",
      date: "03 May 2019",
      desc: "Right-to-left behind development in mobile web design",
    },
  ];

  return (
    <div className="md:w-[1200px]  w mx-auto">
      <div className="pt-[50px] text-orange-400 font-bold text-center text-2xl">
        Blog
      </div>
      <div className="font-bold text-3xl md:text-6xl text-center">My blog post</div>
      <div className="pt-15 grid grid-cols-1 px-5 md:grid-cols-4  space-x-10">
        {blog &&
          blog.map((blo, index) => (
            <div key={index} className="pb-15" >
              <div>
                <img src={blo.image} alt="" />
              </div>
              <div className="flex justify-center items-center md:space-x-3 px-5 pt-4">
                <div  className="flex flex-row-reverse justify-center items-center">
                  <div>{blo.title}</div>
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
                  <div>{blo.date}</div>
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
              <div className=" py-3 flex items-end group hover:text-orange-400 transition-all ">
                <div className="font-bold text-[20px]">{blo.desc}</div>
                <div>
                  <svg
                    className="font-bold text-black group-hover:text-orange-400 "
                    width="28px"
                    height="28px"
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
