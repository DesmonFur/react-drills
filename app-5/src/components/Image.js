import React, {Component} from 'react'


export default class Image extends Component {
constructor(props){
super(props)
}

render(){
return (
<div> 
<img src="https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg" alt="MEME"/>
<img src= {this.props.url}/>
</div>

)


}

}