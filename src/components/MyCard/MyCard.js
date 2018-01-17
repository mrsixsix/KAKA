import React, { Component } from 'react'
import './my-card.css'
import banner_crad from '../images/cut/777.png'
import chen from '../images/cut/hp1.png'
import {PieChart, Pie} from 'recharts'
import Top from "../Top/Top"
class MyCard extends Component {
  render() {
    const data =
  [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
    {name: 'Group E', value: 278},
    {name: 'Group F', value: 189}
  ]
    return (
      <div className='my-card-wrap'>
        <Top topText="我的名片"/>
        <div>
          <img src={ banner_crad } alt="加载失败"/>
          <div>
            <span>
              访客总量：281
            </span>
            <span>
              获赞总数：96
            </span>
          </div>
          <div className="tell-num">
            <span>18733535695</span>
            <i></i>
          </div>
        </div>
        <div>
          <span>
            <img src={ chen } alt="加载失败"/>
            <i>这家伙很懒哈</i>
          </span>
          <span>
            <i>山东省 临沂市</i>
            <i>IT互联网</i>
          </span>
          <i></i>
        </div>
        <div id="container">
          <PieChart width={400} height={200}>
            <Pie
              isAnimationActive={false}
              data={data}
              outerRadius={80}
              fill="#8884d8"
              innerRadius={70}
              dataKey='value'
              startAngle={-40}
              endAngle={220}
            />
            <Pie
              isAnimationActive={false}
              data={data}
              innerRadius={46}
              outerRadius={60}
              fill="#8884d8"
              startAngle={-40}
              endAngle={220}
              dataKey='value'
            />
          </PieChart>
        </div>
      </div>
    )
  }
}

export default MyCard
