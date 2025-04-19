import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useState } from 'react';

const Navbar = () => {

     const [menu,setmenu] = useState(false) 
     const closeFunction = () => setmenu(false)
     const showFunction = () => setmenu(true);
  return (
    <div className="flex">
      {menu && <Menu closeFunction={closeFunction} />}
      <div className="md:pl-[45px]"></div>
      <div className="flex w-full justify-between items-center border-b-[1px] border-black">
        <div>
          <Link to="/">
            <img className='pl-[30px]'  src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-center items-center  gap-x-5 ">
          <div className="flex   group justify-center items-center gap-x-2 transition-all ">
            <Link to="/contact">
              <div className="group text-[15px] font-bold hover:text-white transition-all">
                {" "}
                Let's talk{" "}
              </div>
            </Link>

            <span>
              <svg
                className=" text-[15px] font-bold text-black group-hover:text-white"
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
            </span>
          </div>
          <div>
            <button
              onClick={() => showFunction()}
              className="py-5 px-10 bg-black text-white text-4xl"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar