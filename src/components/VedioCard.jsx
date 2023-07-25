

const VedioCard = ({info}) => {
    // console.log(info)
    
    // const {snippet,tatistics}=info;
    // console.log("dd",snippet)

    // const {channelTitle,title ,thumbnails} = snippet;
    // const{commentCount ,Count,  }=statistics,snippet

  return (
    <div className="p-2 m-2 w-72 shadow-md dark:text-white">
        <img src={info?.snippet?.thumbnails?.medium.url}  alt="" className="rounded-lg "/>
        <ul>
            <li className="font-bold">{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount}</li>

        </ul>
    </div>
  )
}

export default VedioCard