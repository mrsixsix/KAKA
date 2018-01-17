import React, { Component } from 'react'
import './credit.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


class Credit extends Component {
  state = {
    data: [
      {
        id: 15,
        num: 10
      },
      {
        id: 16,
        num: 30
      },
      {
        id: 17,
        num: 50
      },
      {
        id: 18,
        num: 100
      },
      {
        id: 19,
        num: 200
      },
      {
        id: 20,
        num: 500
      },
      {
        id: 21,
        num: 1000
      }
    ],
    score: 0,
    red:0,
    btn:[{num:0,name:"微信",class:"weixin-icon"},{num:1,name:"支付宝",class:"zhifubao-icon"}]
  }

onChange(checked) {
  console.log(`switch to ${checked}`);
}

  handleChange = e => {
    this.setState({
      score: e.target.value
    })
  }

  handleClick = item => {
    this.setState({
      score: item
    })
  }
  handleClick1 = items => {
    this.setState({
      red:items
    })
  }
  render() {
    return (
      <div className='credit-wrap'>
        <header>
          <span onClick={()=>{this.props.history.goBack()}}>取消</span>
          <span>积分充值</span>
          <i></i>
        </header>
        <span className="padd">10元=100积分</span>
        <span className="padd">选择充值金额</span>
        {/* <div className='score1'>
          <span>10积分</span>
          <span>30积分</span>
          <span>50积分</span>
          <span>100积分</span>
        </div>
        <div className='score2'>
          <span>200积分</span>
          <span>500积分</span>
          <span>1000积分</span>
          <span></span>
        </div> */}

        <div className="score">
          {
            this.state.data.map( item => {
              return (
                <span
                  key={item.id}
                  onClick={
                    ()=>this.handleClick(item.num)
                  }
                  className={this.state.score===item.num?'active':''}
                  >{item.num}积分</span>
              )
            })
          }
          <span></span>
        </div>
        <div className="padd">
          其他：<input type="text" value={this.state.score} onChange={this.handleChange}/> 积分
        </div>
        <span>选择支付方式</span>
        <div className='pay-style'>
          {
            this.state.btn.map(items => {
              return (
                <div>
                  <i key={items.id} className={items.class}></i>
                  <span
                    key={items.id}
                    onClick={
                      ()=>this.handleClick1(items.num)
                    }
                    className={this.state.red===items.num?'active':''}
                    >{items.name}</span>
                </div>
              )
            })
          }
        </div>
        <div className="padd">
          支付金额：{(this.state.score/100).toFixed(2)}元
        </div>
        <Link to='/home'>确定</Link>
        <Footer />
      </div>
    )
  }
}

export default Credit
