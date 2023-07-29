const commentData=[
    {
        name:"moumita",
        text: "Lorem ipsum dolor sit amet consectetur ",
        replies:[
            {
                name:"moumita Das",
                text: "Lorem ipsum dolor sit amet consectetur dsvdf ",
                replies:[
                    {
                        name:"moumita",
                        text: "Lorem ipsum dolor sit amet consectetur ",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name:"moumita",
        text: "Lorem ipsum dolor sit amet consectetur ",
        replies:[]
    }, 
    {
        name:"moumita",
        text: "Lorem ipsum dolor sit amet consectetur ",
        replies:[
            {
                name:"moumita Das",
                text: "Lorem ipsum dolor sit amet consectetur dsvdf ",
                replies:[
                    {
                        name:"moumita",
                        text: "Lorem ipsum dolor sit amet consectetur ",
                        replies:[
                            {
                                name:"moumita",
                                text: "Lorem ipsum dolor sit amet consectetur ",
                                replies:[
                                    {
                                        name:"moumita Das",
                                        text: "Lorem ipsum dolor sit amet consectetur dsvdf ",
                                        replies:[
                                            {
                                                name:"moumita",
                                                text: "Lorem ipsum dolor sit amet consectetur ",
                                                replies:[]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    
    {
        name:"moumita",
        text: "Lorem ipsum dolor sit amet consectetur ",
        replies:[]
    },

    
]

 
const Comment=({data})=>{
    const {name,text,replies}=data
    return (
        <div className="flex items-center my-2 shadow-sm bg-gray-100 rounded-lg">
<img className="w-10 h-10"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="" />
<div className="px-3">
    <p className="font-bold">{name}</p>
    <p>{text}</p>
</div>
        </div>
    )
}

let CommentLists=({comments})=>{
    return comments.map((comment,i)=>(
        <div key={i}>
    <Comment  data={comment}/>
    <div className="pl-5 border border-l-black ml-5">
    {/* <Comment  data={comment}/>
    <Comment  data={comment}/>
    <Comment  data={comment}/> */}
    <CommentLists comments={comment.replies}/>


    </div>

        </div>
    ))
}

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
<h1 className="text-lg font-bold">Comments: </h1>
{/* <Comment data={commentData[0]}/> */}
<CommentLists comments={commentData}/>
    </div>
  )
}

export default CommentContainer