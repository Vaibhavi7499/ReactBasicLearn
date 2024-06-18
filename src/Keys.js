import React, { Component } from 'react'

 class Keys extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           Students:[
            {id:1, name:"Vaibhavi"},
            {id:2, name:"Vaishnavi"},
            {id:3, name:"Rutuja"},
            {id:4, name:"Samadhan"}

           ]
      }
    }
    edit=(name)=>{
      console.log(name)
                this.setState({
                  Students:this.state.Students.map((e)=>{
                     if(name == e.name){
                      return {
                        ...e,
                        name:e.name +" "+ "Bodke"
                      }

                     }else{
                      return e
                     }
                })
                })

    }
  render() {
    return (
      <div>  
        <ol>
            {
                this.state.Students.map((ele,i)=>{
                    return <li key={ele.id}>{ele.name}   <button onClick={()=>this.edit(ele.name)}>edit</button></li>
                })
                
            }
            </ol> 
          
      </div>
    )
  }
}

export default Keys