import React, { Component } from 'react'
import './update-user-info.css'
import chen from '../images/cut/hp1.png'
import Footer from '../Footer/Footer';
import Top from "../Top/Top"
class UpdateUserInfo extends Component {
  state = {
    src: chen,
    nickname: 'xx、超',
    sex: '男',
    age: 22,
    address: '北京市 朝阳区',
    bardian: '江湖救急，助人为乐'
  }
  render() {
    const { src, nickname, sex, age, address, bardian } = this.state
    return (
      <div className='update-user-info-wrap'>
        <Top topText="修改个人资料"/>

        <div>
          <img src={ src } alt="加载失败"/>
          <span>点击更换头像</span>
        </div>
        <div>
          <span>
            <i>昵称</i>
            <i>{ nickname }</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>性别</i>
            <i>{ sex }</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>年龄</i>
            <i>{ age }</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>现居地</i>
            <i>{ address }</i>
            <i>{'>'}</i>
          </span>
          <span>
            <i>个性签名</i>
            <i>{ bardian }</i>
            <i>{'>'}</i>
          </span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default UpdateUserInfo
