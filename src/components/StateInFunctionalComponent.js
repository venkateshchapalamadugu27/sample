import React, { useState } from 'react'

export default function StateInFunctionalComponent() {
    let [name,updateName]=useState("gayathri");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("GAYATHRI")}}
                onMouseLeave={()=>{updateName("gayathri")}}>
                      {name}
            </h1>
            
        </div>
    )
}
