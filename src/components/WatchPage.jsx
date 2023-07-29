import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../redux/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentContainer from "./CommentContainer"


const WatchPage = () => {
    const dispatch=useDispatch()
    // const params=useSearchParams()
    const [searchParams]=useSearchParams()
    console.log(searchParams.get("v"))
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
<div className="px-20 pt-5">
        <iframe width="650" height="345" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div>
          <CommentContainer/>
        </div>
    </div>
  )
}

export default WatchPage