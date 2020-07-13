import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header'
import Sign from './pages/sign/sign'
import { auth } from './firebase/firebase'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
