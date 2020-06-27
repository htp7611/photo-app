import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import NotFound from "../../components/NotFound/NotFound";
import MainPage from "./pages/Main/Main";
import AddEditPage from "./pages/AddEdit/AddEdit";

function Photo() {
  const match = useRouteMatch();
  return (
      <Switch>
        <Route exact path={match.url} component={MainPage}/>
        <Route path={`${match.url}/add`} component={AddEditPage}/>
        <Route path={`${match.url}/:photoId`} component={AddEditPage}/>

        <Route component={NotFound}/>
      </Switch>
  );
}

export default Photo;
