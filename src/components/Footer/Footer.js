import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './footer.css'
import Hammer from "react-hammerjs"
// import home1 from '../../images/home1.png'
// import home2 from '../../images/home2.png'
// import find1 from '../../images/find1.png'
// import find2 from '../../images/find2.png'
// import issue1 from '../../images/issue1.png'
// import issue2 from '../../images/issue2.png'
// import message1 from '../../images/message1.png'
// import message2 from '../../images/message2.png'
// import wd1 from '../../images/wd1.png'
// import wd2 from '../../images/wd2.png'

class Footer extends Component {
  state = {
    data: [
      {
        id: 22,
        path: 'home',
        text: '首页'
      },
      {
        id: 23,
        path: 'find',
        text: '发现'
      },
      {
        id: 24,
        path: 'issue',
        text: '发布'
      },
      {
        id: 25,
        path: 'message',
        text: '消息'
      },
      {
        id: 26,
        path: 'user',
        text: '我的'
      }
    ],
    numss: 0
  }

  handleClick = (item,index) => {
    this.props.history.push(`/${item.path}`)
    this.setState({
      numss: index
    })
    console.log(index)
  }
  render() {

    let { data, numss } = this.state
  let btn=data.map( (item,index)=> {
      return (
        <Hammer onTap={()=>this.handleClick(item,index)} key={item.id}>
          <li key={item.id}>
            <i className={numss===index?'active':''}></i>
            <span>{ item.text }</span>
          </li>
        </Hammer>

      )
    })

    return (
      <footer>
        <ul>
          {btn}
        </ul>
      </footer>
    )
  }
}

export default withRouter(Footer)
