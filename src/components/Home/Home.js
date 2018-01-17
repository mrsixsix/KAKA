import React from 'react'
import "./home.css"
import { Carousel} from 'antd';
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import Location from "../images/location.png"
import Kaka from "../images/kakapng.png"
import Search from "../images/search.png"
import Banner1 from "../images/banner1.jpg"
import Banner2 from "../images/banner2.png"
import Banner22 from "../images/banner22.png"
import Banner3 from "../images/banner3.jpg"
import Line from "../images/line.png"
import ImgMan from "../images/men.png"
import ImgWoMan from "../images/women.png"
import Hp1 from "../images/cut/hp1.png"
import Hp2 from "../images/cut/hp2.png"
import TaskImg1 from "../images/cut/7777.jpg"
import Bicon from "../images/b-icon.png"
import LocationLess from "../images/654.png"
import RecommendImg1 from "../images/cut/recommend1.jpg"
import RecommendImg2 from "../images/cut/recommend2.jpg"
import RecommendImg3 from "../images/cut/recommend3.jpg"
import ReadingImg from "../images/reading.png"
import GorImg from "../images/gor.png"
import CommentImg from "../images/comment.png"
import Footer from "../Footer/Footer"
class Home extends React.Component {
  state={
    data:{

      new:[
        {
          content:<div><span>想了解一下武汉市武昌区汉街额街景和街上的几个咖啡店里的情况……</span></div>,
          contentshort:<div><span>想了解一下武汉市武昌区汉街额街景和街上的几个咖啡店里的情况……</span></div>,
          name:"chen xx",
          gender:true,
          price:50,
          id:0,
          map:"上海市浦东新区 988km 2017-03-09",
          mapshort:"上海市浦东新区988km",
          hp:Hp1
        },
        {
          content:<div><span>我想知道这个星巴克现在的客流量怎么样</span><img src={TaskImg1} alt=""/></div>,
          contentshort:<div><span>我想知道这个星巴克现在的客…</span><img src={TaskImg1} alt=""/></div>,
          name:"an 然",
          gender:false,
          price:100,
          id:1,
          map:"上海市浦东新区998km 03-09",
          mapshort:"合肥市包河区 917km",
          hp:Hp2
        }
      ],
      recommend:[
        {
          recommendimg:<div className="recom-img"><img src={RecommendImg1} alt="" className="recommendimg-1"/><img src={RecommendImg2} alt="" className="recommendimg-2"/><img src={RecommendImg3} alt="" className="recommendimg-3"/></div>,
          content:"所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)",
          contentshort:"古根海娒美术馆",
          reading:6326,
          gor:70,
          comment:261
        }
      ]
    }
  }
  handleClick=()=>{
    accesstoken:1
  }

  render () {
    // console.log(this.state.check)
    let Content=this.state.data.new.map(
      (item,index)=>{
        return(
          <div>
            <Link to={{pathname:`/Task/${item.id}`,state:{data:this.state.data.new[item.id]}}} key={item.id}>
              <div className="task-box" key={index}>
                <div className="task-box-top" key={index}>{item.contentshort}</div>
                <div className="task-box-bottom">
                  <div className="task-box-left">
                    <img src={item.hp} alt=""/>
                  </div>
                  <div className="task-box-right">
                    <div className="task-box-right1">
                      <span>{item.name}</span>
                      <img src={item.gender ? ImgMan:ImgWoMan} alt="" className="gender"/>
                      <img src={Bicon} alt="" className="b-icon"/>
                      <span className="price">{item.price}</span>
                    </div>
                    <div className="task-box-right2">
                      <img src={LocationLess} alt="" className="locationless"/>
                      <span className="task-map">{item.mapshort}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Footer/>
          </div>
        )
      }
    )
    let ContentRe=this.state.data.recommend.map(
      (item,index)=>{
        return(
          <div className="recommend-main" key={index}>
            {item.recommendimg}
            <span>{item.content}</span>
            <span className="contentshort">{item.contentshort}</span>
            <div className="recommend-bottom">
              <img src={ReadingImg} alt="" className="reading-img"/>
              <span>{item.reading}</span>
              <img src={GorImg} alt="" className="gor-img"/>
              <span>{item.gor}</span>
              <img src={CommentImg} alt="" className="comment-img"/>
              <span>{item.comment}</span>
            </div>
          </div>
        )
      }
    )
      return(
        <div>
          <div className="header">
              <span>武汉</span>
              <img src={Location} alt="" className="location-img"/>
              <img src={Kaka} alt="" className="kakalogo"/>
              <img src={Search} alt="" className="searchimg"/>
          </div>
          <Carousel autoplay>
            <div className="banner-1"><img src={Banner2} alt="" className="banner"/><img src={Banner22} alt="" className="banner22"/></div>
            <div className="banner-2"><img src={Banner1} alt="" className="banner"/></div>
            <div className="banner-3"><img src={Banner3} alt="" className="banner"/></div>

          </Carousel>
          <div className="new">
            <div className="task-top">
              <img src={Line} alt="" className="line"/>
              <span>最新任务</span>
              <img src={Line} alt="" className="line"/>
            </div>
            <div className="task-main">
              {Content}
            </div>
          </div>
          <div className="recommend">
            <div className="task-top">
              <img src={Line} alt="" className="line"/>
              <span>今日推荐</span>
              <img src={Line} alt="" className="line"/>
            </div>
            {ContentRe}
          </div>
        </div>
      )
  }
}

export default Home;
