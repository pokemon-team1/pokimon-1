import { data } from "./data"

function List (){
   

    return ( data.map((list)=>
    <div> 
        <a className="list" href={list.imageUrl}>{list.name}</a>
        
    </div>    
    ))
    
}

export default List