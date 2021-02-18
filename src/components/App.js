import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Layout from '../components/layout/Layout';
import NotFound from '../pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter basename='/geducar'>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact name="posts" path="/posts/:idUser/:name" component={Posts} />
          {/* <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
