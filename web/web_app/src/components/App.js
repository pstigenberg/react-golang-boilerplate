import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '../features/IndexPage/IndexPage';

class App extends React.Component {
    
    render() {
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