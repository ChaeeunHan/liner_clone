import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Foryou from './Foryou';
import MyHighlights from './Myhighlights';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Router>
          <div className='home-left-side'>
            <Menu />
          </div>
          <Switch>
            <Route exact={true} path='/' component={Foryou}></Route>
            <Route path='/home' component={Foryou}></Route>
            <Route path='/highlights' component={MyHighlights}></Route>
          </Switch>
        </Router>
      </div>
  );
};

export default App;