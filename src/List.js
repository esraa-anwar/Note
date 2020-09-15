import React from 'react'
import './List.css'
import FlipMove from 'react-flip-move'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function List(props) {
    const items=props.items;
    const Listitems=items.map(item =>
        {

return <div className="List" key={item.key}>


<p>
    <input type="text" 
    id={item.key}
    value={item.text}
    onChange={(e)=>{
props.setUpdate(e.target.value,item.key)

    }}></input>

<span>
<FontAwesomeIcon className="faicons" icon="trash"
onClick={() => props.deleteItem(item.key)}

/>

</span>
</p>


</div>


        })

        return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
            
            
             {Listitems}</FlipMove></div>
        
   
    )
}

export default List

