import Button from "./Button"

let Btnlist=["All","Live","Music","Mixes","Thoughts","Game shows","Dramedy","movies","Bollywood Music"]

const ButtonList = () => {
  return (
    <div className="flex gap-3 m-2 ">
     {Btnlist.map((ele,i)=>{
      return (
       <div key={i}>
      <Button name={ele}/>
      </div>
      )
     })}
    </div>
  )
}

export default ButtonList