import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../shared/components/Routes/PrivateRoutes";
import PublicRoute from "../shared/components/Routes/PublicRoutes";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ProjectListPage = lazy(() => import("../pages/ProjectListPage"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const SprintsListPage = lazy(() => import("../pages/SprintListPage"));
const SprintPage = lazy(() => import("../pages/SprintPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute exact path="/" redirectTo="/login">
          <RegisterPage />
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/projects">
          <LoginPage />
        </PublicRoute>
        <PublicRoute exact path="/login">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute exact path="/projects" redirectTo="/login">
          <ProjectListPage />
        </PrivateRoute>
        <PrivateRoute exact path="/projects/:id/sprints" redirectTo="/login">
          <ProjectPage />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/projects/:id/sprints/:id"
          redirectTo="/login"
        >
          <SprintPage />
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;
