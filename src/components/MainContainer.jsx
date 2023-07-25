import ButtonList from "./ButtonList"
import VedioContainer from "./VedioContainer"
import { AiOutlineHome } from 'react-icons/ai';
import {BsFillCollectionPlayFill,BsCollectionPlay} from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { useSelector } from 'react-redux';
// import store from '../redux/store';


const MainContainer = () => {
  let seletor=useSelector(store=>store.app.isMenuOpen)

  return (
    <div className="flex ">
{ seletor? "" :
<div className=""> 
    <div className="dark:text-white text-black w-[9rem] " >
    <ul className='flex flex-col gap-5 pt-2'>
      <li  className='flex flex-col items-center '><AiOutlineHome/>Home</li>
      <li className='flex flex-col items-center '><BsCollectionPlay/>shorts</li>
      <li className='flex flex-col items-center '><BsFillCollectionPlayFill/>Subscriptions</li>
      <li className='flex flex-col items-center '><BiMoviePlay/>Libary</li>
    </ul>

    </div>
    </div>
}
  

    <div>

      <ButtonList/>
      <VedioContainer/>
    </div>
    </div>
  )
}

export default MainContainer