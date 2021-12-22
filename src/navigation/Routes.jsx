import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../shared/components/Routes";
import AuthPage from "../pages/AuthPage";

const Routes = () => {
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <PublicRoute exact path="/" redirectTo="/login"></PublicRoute>
      <PublicRoute exact path="/signup" redirectTo="/login"></PublicRoute>
    </Switch>
  </Suspense>;
};
export default Routes;
