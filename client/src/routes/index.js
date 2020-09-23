import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { PrivateRoute, PublicRoute } from '../routes/routesManager';
import AdminScreen from '../containiers/admin/AdminScreen';
import LandingPage from '../containiers/LandingPage';
import Enquiries from "../containiers/admin/Enquiries";
import Register from "../containiers/admin/Register";
import Signin from "../containiers/admin/SignIn";



export const loadRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <PublicRoute
          exact
          path="/admin"
          component={props => <AdminScreen {...props} />}
        />
        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />

        <PublicRoute
          exact
          path="/enquiries"
          component={props => <Enquiries {...props} />}
        />
        <PublicRoute
          exact
          path="/signup"
          component={props => <Register {...props} />}
        />
        <PublicRoute
          exact
          path="/signin"
          component={props => <Signin {...props} />}
        />

      </div>
    </Router>
  )

}