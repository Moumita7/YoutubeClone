import { AiOutlineHome } from 'react-icons/ai';
import {BsFillCollectionPlayFill,BsCollectionPlay} from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { Link } from 'react-router-dom';






const Sidebar = () => {

  let seletor=useSelector(store=>store.app.isMenuOpen)

  if(!seletor) return null
  return (
    <div className="dark:text-white w-[12rem] pr-10 pl-2 dark:bg-gray-950 " >
    <ul className='flex flex-col gap-2 pt-2'>
     <Link to="/"> <li  className='flex items-center gap-3'><AiOutlineHome/>Home</li></Link>
      <li className='flex items-center gap-3'><BsCollectionPlay/>shorts</li>
      <li className='flex items-center gap-3'><BsFillCollectionPlayFill/>Subscriptions</li>
    <div className="border"></div>
    <li className='flex items-center gap-3'><BiMoviePlay/>Libary</li>
      <li>shorts</li>
      <li>Subscriptions</li>

    </ul>

    </div>
  )
}

export default Sidebar