import { AiOutlineBell, AiOutlineCompass } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsFilterRight } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="px-10 py-3 bg-white">
      <div className="flex justify-between">
        <div className="h-9 w-9 flex items-center gap-3">
          <img
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
            alt="logo"
            className="h-full w-full"
          />
          <h3 className="font-semibold text-xl">CipherSchools</h3>
          <div className="flex gap-1 items-center ml-4 cursor-pointer">
            <AiOutlineCompass />
            <span>Browse</span>
            <BiChevronDown />
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="relative flex items-center">
            <FiSearch className="absolute left-3" />
            <input
              type="text"
              name="search"
              id="search"
              className="bg-[#f2f4fb] rounded-3xl placeholder:text-slate-600 pl-9 placeholder:font-light placeholder:text-sm text-sm outline-none py-2 w-64"
              placeholder="Search and Learn"
            />
            <BsFilterRight className="absolute right-3" />
          </div>
          <AiOutlineBell className="w-5 h-5" />
          <div className="w-5 h-5 rounded-full bg-slate-700"></div>
          <div className="flex items-center gap-1">
            <img
              src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
              alt="cp"
              className="h-5 w-5"
            />
            <div className="text-orange-400 font-semibold text-md mt-0 pt-0">
              0
            </div>
          </div>
          <div className="inline-flex items-center">
            <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
              <input
                id="switch-component"
                type="checkbox"
                className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors bg-slate-600 duration-300 checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:before:bg-orange-500"
              />
              <label
                htmlFor="switch-component"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-orange-500 peer-checked:before:bg-orange-500"
              >
                <div
                  className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                  data-ripple-dark="true"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
