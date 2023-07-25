import { Route, Routes } from "react-router-dom"
import Body from "../components/Body"
import MainContainer from "../components/MainContainer"
import WatchPage from "../components/WatchPage"


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route  path="/" element={<Body/>}/> */}
            <Route path="/" element={<MainContainer/>} />
            <Route path="/watch" element={<WatchPage/>} />


        </Routes>
    </div>
  )
}

export default AllRoutes