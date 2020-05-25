import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Layout } from './components/layout/index';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
         {
          routes.map(route => (
            <Route exact={route.exact} path={route.path} key={route.toString()}>
            {route.component}
          </Route>
          ))
         }
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;



