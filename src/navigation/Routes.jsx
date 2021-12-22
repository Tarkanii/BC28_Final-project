import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
// import PrivateRoute from "../shared/components/Routes/PrivateRoutes";
import PublicRoute from "../shared/components/Routes/PublicRoutes";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute exact path="/" redirectTo="/login">
          <LoginPage />
        </PublicRoute>
        <PublicRoute exact path="/signup" redirectTo="/login">
          <RegisterPage />
        </PublicRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;
