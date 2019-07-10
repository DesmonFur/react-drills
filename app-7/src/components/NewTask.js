import React, {Component} from 'react'

export default class NewTask extends Component{
    constructor(){
    super()
    this.state = {
        user: ''
    }

    }

handleInputChange = (val) => {
  console.log(this.state)
this.setState({user:val})
}

handleAdd = () => {
    this.props.add(this.state.user)
  console.log(this.state)
  this.setState({
user: ''
  })
}

render(){
    return(
        <div>
        <input
          value={this.state.user}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>

    )
}

}

