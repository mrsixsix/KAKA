import React from 'react'
import './app.css'
import {
  HashRouter as Router,Route,Switch
}

from 'react-router-dom'
import Home from "./components/Home/Home"
import Guide from "./components/Guide/Guide"
import Task from "./components/Task/Task"
import Reply from "./components/Reply/Reply"
import Find from "./components/Find/Find"
import Message from "./components/Message/Message"
import Issue from "./components/Issue/Issue"
import User from "./components/User/User"
import MyCard from "./components/MyCard/MyCard"
import Account from "./components/Account/Account"
import Cash from "./components/Cash/Cash"
import Withdraw from "./components/Withdraw/Withdraw"
import Credit from "./components/Credit/Credit"
import Settings from "./components/Settings/Settings"
import UpdateUserInfo from "./components/UpdateUserInfo/UpdateUserInfo"
import ChangePassword from "./components/ChangePassword/ChangePassword"
class App extends React.Component {

render () {

    return (
      <Router>
        <div>
          <Switch>
          <Route path='/' exact component={Guide}/>
          <Route path='/home' component={Home} />
          <Route path='/Task' component={Task} />
          <Route path='/reply' component={Reply} />
          <Route path='/find' component={Find} />
          <Route path='/message' component={Message} />
          <Route path='/issue' component={Issue} />
          <Route path='/user' component={User} />
          <Route path='/my-card' component={MyCard} />
          <Route path='/account' component={Account} />
          <Route path='/cash' component={Cash} />
          <Route path='/withdraw' component={Withdraw} />
          <Route path='/credit' component={Credit} />
          <Route path='/settings' component={Settings} />
          <Route path='/update-user-info' component={UpdateUserInfo} />
          <Route path='/change-password' component={ChangePassword} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
