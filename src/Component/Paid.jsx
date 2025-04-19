import React from 'react'

const Paid = () => {
    const price = [
        {
            type : "Basic",
            price : "$48/h",
            time : "20 hr",
            week : "10 hours per week"
        },
        {
            type : "Premium",
            price : "$60/h",
            time : "30 hr",
            week : "15 hours per week"
        },
        {
            type : "Platinum",
            price : "$60/h",
            time : "80 hr",
            week : "80 hours per week"
        },
    ]
  return (
    <div className="md:px-[100px] mx-auto  md:py-[100px] px-7.5 pb-20 ">
      <div className='text-orange-400 text-2xl font-bold ' >Pricing</div>
      <div className='md:flex justify-between items-end' >
        <div className="flex flex-col text-4xl pt-5 md:text-6xl font-bold ">
          <div><span className='text-orange-400' >S</span>tay chill and </div>
          <div>pick your plan</div>
        </div>
        <div className='py-5' >
          <div className='flex justify-center items-center bg-black text-white p-5 py-4 font-bold space-x-5 rounded group shadow-2xl hover:bg-white hover:text-black transition-all ' >
            <div>Contact for custom Project</div>
            <div>
              <svg
                className="font-bold text-white group-hover:text-black"
                width="18px"
                height="18px"
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
      </div>
      <div className='  grid grid-cols-1  md:grid-cols-3 rounded-2xl md:space-x-5 space-y-5 md:py-[50px] ' >
        {price.map((pr, index) => (
          <div key={pr.index} className=' group hover:bg-white p-10 shadow-2xl transition-all rounded-2xl  bg-[#f1f1f1] ' >
            <div className='flex justify-between pb-10 ' >
              <div className='text-[#676767]' >{pr.type}</div>
              <div className='font-bold text-orange-400' >{pr.price}</div>
            </div>
            <div className='font-bold text-3xl' >{pr.time}</div>
            <div className='flex justify-between text-[#676767]' >
              <div>{pr.week}</div>
              <div>
                <svg
                  className="font-bold text-black group-hover:text-orange-400"
                  width="18px"
                  height="18px"
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
}

export default Paid