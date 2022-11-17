import {data} from './data.js'


const Ima=()=>{
    return (
    data.map((card)=>
    <div >
       <div class="card" >
         <img src={card.imageUrl} class="card-img-top" alt="card"/>
           <div class="card-body">
             <a  class="btn btn-primary">Select</a>
           </div>
      </div>
   </div>
   ))
}
export default Ima;