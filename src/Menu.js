import { data } from "./data"


const List =()=>{
    return ( data.map((list)=>
    <div>   
        
        <a href={list.imageUrl}>{list.name}</a>
        
        
    </div>    
    ))
    
}

export default List