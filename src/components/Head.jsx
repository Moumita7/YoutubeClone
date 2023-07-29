import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineSearch} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link,  } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// import store from "../redux/store";
import { cacheResults } from "../redux/searchSlice";

const Head = ({ darkMode, setDarkMode }) => {
const [searchQuery,setSearchQuery]=useState("")
const [suggestion,setSuggestion]=useState([])
const [showSuggestion,setShowSuggestion]=useState(false)

const searchCache=useSelector((store)=>store.search)
console.log("scc",searchCache)

  let dispatch=useDispatch()

  let toggleMenuHandeler=()=>{
    dispatch(toggleMenu())
  }
useEffect(()=>{
// console.log(searchQuery)
  
// getSearchSuggestion()

// let timmer=setTimeout(()=>getSearchSuggestion(),200)
let timmer=setTimeout(()=>
{
  if(searchCache[searchQuery]){
    setSuggestion(searchCache[searchQuery])
  }else{

    getSearchSuggestion()
  }
},200)


return ()=>clearTimeout(timmer)
},[searchQuery])

const getSearchSuggestion=async ()=>{
  console.log(searchQuery)
  const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
  const json=await data.json()
  // console.log(json[1])
  setSuggestion(json[1])

  //update Cache
  dispatch(cacheResults({
    [searchQuery]:json[1]
// "iphone":[1,2,3]

  }))
}

  return (
    <div className=" grid grid-flow-col gap-4 shadow-md p-2 items-center dark:bg-slate-900 dark:text-white">
      <div className="flex col-span-2 gap-4">
      <div onClick={()=>toggleMenuHandeler()} className="cursor-pointer">

        <GiHamburgerMenu />
      </div>
      <Link to="/">
        <img
          className="w-15 h-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
        </Link>
      </div>
      <div className="col-span-10 px-10  ">
      <div className=" flex    ">
      <div className=" flex-1">



        <input type="text"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=>setShowSuggestion(false)}


        placeholder="Search" className="w-1/2 outline-none border  hover:border-blue-700


         dark:bg-slate-900 border-gray-400 pl-[20px] pt-2 pb-1 rounded-l-full " />
        <button className=" border border-gray-400 py-[8px] px-5 pt-[10px] pb-[10px] rounded-r-full"><AiOutlineSearch/></button>
        </div>
        {/* {suggestion.length== 0 ? "":
        ( */}
        {showSuggestion && suggestion.length>=1 && ( 
          <div className="absolute mt-10 ml-1 py-2 px-5  w-[22rem] bg-white rounded-lg shadow-lg">
          <ul className="">
          {suggestion.map((s)=><li key={s} className="flex  items-center gap-2 p-1 hover:bg-gray-200"><AiOutlineSearch/>{s}</li>)}

           
          </ul>
        </div>)}
      
        {/* } */}
      
      </div>
      </div>
      <div className="flex col-span-2 gap-2">
        <p>logo</p>
        <button
          className=" rounded "
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode == false ? <BsMoon /> : <BsSun />}
        </button>
      </div>
    </div>
  );
};

export default Head;
