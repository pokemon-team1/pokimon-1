import { data } from "./data"


const List =()=>{
    return ( data.map((list)=>
    <div>   
        
        <a className="list" href={list.imageUrl}>{list.name}</a>
        
        
    </div>    
    ))
    
}

export default List