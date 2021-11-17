import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';
import LoginForm from './LoginForm';
import Register from './Register/Register';
import Seating from './seating';
import $ from 'jquery';

const {Provider, Consumer} = React.createContext()
export {Consumer}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    };
  }

  
  render () {
    return (
      <div className="App">
        <Route exact path='/' render={() => <LoginForm oncreate={this.getName} />}/>
        {/* <Route path='/seating' component={Seating} /> */}
        <Route path="/seating" render={() => <Seating />} />
        <Route path="/register" render={() => <Register />} />
      </div>
    );
  }
}

export default App; 