import { AiOutlineHome } from 'react-icons/ai';
import {BsFillCollectionPlayFill,BsCollectionPlay} from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';






const Sidebar = () => {
  return (
    <div className="dark:text-yellow-200 bg-red-400 w-[12rem]" >
    <ul>
      <li className='flex items-center gap-3'><AiOutlineHome/>Home</li>
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