import React, { Component } from 'react'
import B from './B'
export class A extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

        }
        this.getVillegeName=this.getVillegeName.bind(this)
    }
    getVillegeName(vName){
console.log(vName)
    }
  render() {
    return (
      <div>
        <B villege={this.getVillegeName}/>
      </div>
    )
  }
}

export default A