import React, {Component} from 'react'

export default class Todo extends Component{
constructor(props){
    super(props)
}

render(){
return(
    <h1>{this.props.task}</h1>

)

}

}