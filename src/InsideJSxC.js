import { Component } from "react";

export class InsideJSxC extends Component {

    // constructor(props) {
    //     super(props)
    //     console.log(props,
    //         'Kirjdfk'
    //     )
    // }
    render() {
        return (
            <div>
                <h1>I am inside a render function</h1>
                <h1>{this.props.name} {this.props.age}</h1>
                <h1></h1>
            </div>
        )
    }
}