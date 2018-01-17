import React from 'react'
import "./top.css"
import Backimage from "../images/back.png"
import {withRouter} from 'react-router-dom'
class Top extends React.Component {
  goback=()=>{
      this.props.history.goBack()
    }
  render () {
    const {topText}=this.props
    return(
      <div className="top">
        <img src={Backimage} alt="" className="back" onClick={this.goback}/>
        <span>{topText}</span>
      </div>
    )
  }
}

export default withRouter(Top);
