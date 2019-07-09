import React, {Component} from 'react'

export default class Login extends Component{
constructor(){
    super()
    this.state = {
        user:'',
        pass: ''
    }
}

change(e){
this.setState({user: e})
}
changeO(r){
this.setState({pass: r})
}

alertLog(){
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
}

render(){
return(
<div>
    <input type="text" onChange= {(e) => this.change(e.target.value) }/>
    <input type="text" onChange= {(r) => this.changeO(r.target.value) }/>
    <button onClick = { () => this.alertLog(this.state.userPut)}  >LOGIN</button>
</div>

)
}






}