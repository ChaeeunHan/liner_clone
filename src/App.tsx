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
import More from './More';
import RightMenu from './RightMenu';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Router>
          <Menu />
          <div className='main-content'>
            <Switch>
              <Route exact={true} path='/' component={Foryou}></Route>
              <Route path='/home' component={Foryou}></Route>
              <Route path='/highlights' component={MyHighlights}></Route>
              <Route path='/more' component={More}></Route>
            </Switch>
          </div>
          <RightMenu />
        </Router>
      </div>
  );
};

export default App;