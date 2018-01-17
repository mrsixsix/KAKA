import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./reply.css"
import LocationLess from "../images/654.png"
class Reply extends React.Component {
  state={
    colorTex:true,
    replyText:"请详细描述发布者的问题，以便更圆满的完成此次任务"
  }
  handleBlur=()=>{
    if(this.state.colorTex==true){
      this.setState({
        replyText:""
      })
    }
    this.setState({
      colorTex:false
    })
  }
  handleChange = e => {
    this.setState({
      replyText: e.target.value
  })
  }
  render () {
    console.log(this.state.replyText)
    let {colorTex}=this.state
    let {replyText}=this.state
      return(
        <div>
          <div className="top">
            <span className="cancel">取消</span>
            <span>任务详情</span>
          </div>
          <textarea name="aa" className="reply-textarea" placeholder="" style={{"color":colorTex?"#CCCCCC":"black"}} onClick={this.handleBlur} value = {replyText} onChange={this.handleChange}></textarea>
          <div className="reply-mid">
            <span className="reply-mid-left">当前位置</span>
            <img src={LocationLess} alt="" className="locationless"/>
            <span className="reply-mid-right">北京市 古北口镇司马台村1层</span>
          </div>
          <div className="task-botbot">
            <Link to='/home'>
                <span>发送</span>
            </Link>
          </div>
        </div>
      )
  }
}

export default Reply;
