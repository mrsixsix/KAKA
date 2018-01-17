import React from 'react'

import "./guide.css"
import Img1 from "../images/guide-4.png"
import Hammer from "react-hammerjs"
import Come1 from "../images/comein.jpg"
import { Link } from 'react-router-dom'
class Guide extends React.Component {
  state={
    leftNum:0
  }
handleClickLeft=()=>{
if(this.state.leftNum>-300){
  this.setState({
    leftNum:this.state.leftNum-100
  })
}
}
handleClickRight=()=>{
if(this.state.leftNum<0){
  this.setState({
    leftNum:this.state.leftNum+100
  })
}
}
  render () {
    let {leftNum}=this.state
    return(
    <Hammer onSwipeLeft={this.handleClickLeft} onSwipeRight={this.handleClickRight}>
      <div className="guide-all">
        <div className="guide-box" style={{marginLeft:leftNum+"vw"}}>
          <div className="guide-1 guide"></div>
          <div className="guide-2 guide"></div>
          <div className="guide-3 guide"></div>
          <div className="guide-4 guide">
            <img src={Img1} alt="" className="img-top"/>
            <h1>随享咔咔</h1>
            <h3>帮你所看&nbsp;&nbsp;&nbsp;随享咔咔</h3>
            <Link to="/home"><img src={Come1} alt="" className="img-foot"/></Link>
          </div>
        </div>
      </div>
    </Hammer>
    )
  }
}

export default Guide;
