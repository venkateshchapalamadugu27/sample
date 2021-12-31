import React, { Component } from 'react'
import '../States.css'
export default class StateInClassComponent extends  Component {
   constructor(props){
       super(props)
       this.state={
           name:"venki ",
           count:0
       }
   }
    render(){
    setTimeout(() => {
        this.setState({
            name:"venki c"
            
        })
        
    },2000)

        return (
            <div className='demo' >
                <h1>Welcome  {this.state.name}</h1>
                <h2>count:{this.state.count}</h2>
                <button onClick={()=>{

                this.setState({
                  count:this.state.count+1 })
              
                 } }>Increment count</button>


<button onClick={()=>{

this.setState({
  count:this.state.count-1 })

 } }>Decrement count</button>

            </div>
        )
    }
}
