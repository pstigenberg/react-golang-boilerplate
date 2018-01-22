import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import IndexPage from '../features/IndexPage/IndexPage';

class App extends React.Component {
    
    render() {
      const activeStyle = { color: 'blue' };
      return (
        <div>
          <Switch>
            <Route exact path="/" component={IndexPage} />
          </Switch>
        </div>
      );
    }
  }
  
  export default App;