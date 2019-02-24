import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      });
    }
    return result;
  }

}

export default App;
