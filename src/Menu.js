import { data } from "./data"

function List (){
   

    return ( data.map((list)=>
    <div> 
        < link className="list" href={list.imageUrl}>{list.name}</link>
        
    </div>    
    ))
    
}

export default List