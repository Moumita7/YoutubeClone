import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineSearch} from "react-icons/ai";

const Head = ({ darkMode, setDarkMode }) => {
  return (
    <div className=" dark:bg-red-700 grid grid-flow-col gap-4 shadow-md p-2 items-center">
      <div className="flex col-span-2 gap-4">
        <GiHamburgerMenu />
        <img
          className="w-15 h-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 px-10  ">
      <div className=" flex justify-center">

        <input type="text" className="w-1/2 border border-gray-400 p-1 rounded-l-full " />
        <button className=" border border-gray-400 py-1 px-5 rounded-r-full"><AiOutlineSearch/></button>
      </div>
      </div>
      <div className="flex col-span-2">
        <p>logo</p>
        <button
          className=" bg-blue-500 text-white rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode == false ? <BsMoon /> : <BsSun />}
        </button>
      </div>
    </div>
  );
};

export default Head;
