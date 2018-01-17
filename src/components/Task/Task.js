import React from 'react'
import Top from "../Top/Top"
import "./task.css"
import ImgMan from "../images/men.png"
import ImgWoMan from "../images/women.png"
import Bicon from "../images/b-icon.png"
import LocationLess from "../images/654.png"
import WarnImg from "../images/warning.png"
import { Link } from 'react-router-dom'
class Task extends React.Component {
  state={
    checked:false,
    warningDis:true
  }
  componentDidMount() {
    if(sessionStorage.checked === 'close'){
      this.setState({
        warningDis:false
      })
    }
  }
  handleClickSwitch=(judge)=>{
    if(this.state.checked == true){
      sessionStorage.checked = 'close'
    }
    this.setState({
      warningDis:false
    })
  }
handleSubmit=()=>{
  this.setState({
    checked:!this.state.checked
  })
}
  render () {
    console.log(sessionStorage.checked)
    const {data}=this.props.location.state
    let {warningDis}=this.state
    console.log(warningDis);
    return(
      <div className="task">
        <Top topText="任务详情"/>
        <div className="task-maintop">
          <div className="task-toptop">
            <img src={data.hp} alt="" className="task-hp"/>
            <div className="task-name">
              <span>{data.name}</span>
              <img src={data.gender ? ImgMan:ImgWoMan} alt="" className="gender"/>
            </div>
          </div>
          <div className="task-midmid">
              <div className="task-mid-content">{data.content}</div>
              <div className="task-map">
                <img src={LocationLess} alt="" className="locationless"/>
                <span className="task-map-span">{data.map} 15分钟</span>
                <img src={Bicon} alt="" className="b-icon"/>
                <span className="task-map-price">{data.price}</span>
              </div>
          </div>
        </div>
        <div className="task-botbot">
            <Link to='/reply'>
              <span onClick={()=>{this.handleClickSwitch(false)}}>接受任务</span>
            </Link>
        </div>
        <div className="warning" style={{"display":warningDis?"block":"none"}}>
            <img src={WarnImg} alt="" className="warning-img"/>
            <h1>注意事项</h1>
            <p>1、请尽量发布真实、有价值的问题答案</p>
            <p>2、发送内容支持最多5张照片、视频时间不可超过10秒</p>
            <span className="warning-line"></span>
            <p>1、所有发送内容都会被审查</p>
            <p>2、禁止发送色情、血腥暴力等不当内容</p>
            <p className="wp-3">3、如有违反《 随享咔咔内容条约 》将会受到相应的惩罚，严重者追究法律责任</p>      
              <span className="warning-btn" onClick={()=>{this.handleClickSwitch(true)}}>我知道了</span>
            <div>
              <input type="checkbox" className="warning-check" checked={this.state.checked} onChange={this.handleSubmit}/>
              <p>不再提示</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Task;
