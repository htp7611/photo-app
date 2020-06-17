import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

// lazy load module
const Photo = React.lazy(() => import('./features/Photo/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
