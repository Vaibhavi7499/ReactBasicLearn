import { Component } from "react";
var year
function showTime(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var today=new Date()
        year=today.getDate()+ ' -'+ (today.getMonth()+1)+' -'+today.getFullYear() +'    , '+day[today.getDay()]+ '  ,'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()
        setTimeout(showTime,1000)
}
    
showTime()


export class Clock extends Component{
    constructor(){
        super()
        
        this.state={
            date:year
        }
    }
    render(){
        return(
               <div>
                <h1>{this.state.date}</h1>
               </div>
            )
    }
}