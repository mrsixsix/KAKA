import React, { Component } from 'react'
import './settings.css'
import chen from '../images/cut/hp1.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Top from '../Top/Top'
import { Switch } from 'antd'
import 'antd/lib/switch/style/css'

class Settings extends Component {
  handleClick = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className='settings-wrap'>
        <Top topText="修改个人资料"/>
        <div>
          <img src={ chen } alt="加载失败"/>
        </div>
        <div>
          <span onClick={()=>{this.props.history.push('/update-user-info')}}>
            <i>修改个人资料</i>
            <i>{'>'}</i>
          </span>
          <span onClick={()=>{this.props.history.push('/change-password')}}>
            <i>修改密码</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>清除缓存</i>
            <i>210MB</i>
          </span>
          <span>
            <i>是否公开我的消息</i>
            <Switch />
          </span>
          <span>
            <i>接受新消息通知</i>
            <Switch defaultChecked={true}/>
          </span>
        </div>
        <Link to='/login'>退出登录</Link>
        <Footer />
      </div>
    )
  }
}

export default Settings
