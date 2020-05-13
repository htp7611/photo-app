import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Redirect} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

// lazy load module
const Photo = React.lazy(() => import('./features/Photo/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to='/photos'>Go to photo pages</Link></li>
            <li><Link to='/photos/add'>Add new photo page</Link></li>
            <li><Link to='/photos/123'>Edit photo page</Link></li>
          </ul>
          <Switch>
            <Redirect exact from='/' to='/photo' />

            <Route path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
