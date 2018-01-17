import React from 'react'

 state={tab:["北京","上海","无锡","景德镇","沈阳","杭州","大连","成都","郑州","武汉","宁波","青海","广州","西安","海南","郑州"]  }
class City extends React.Component {
  render () {
     let {tab}=this.state
    let Citym=tab.map((item,index)=>{
      return(
        <span key={index}>{item}</span>
      )
    })
      return(
        <div>

        </div>
      )
  }
}

export default City;
