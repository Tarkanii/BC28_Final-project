import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../shared/components/Routes/PrivateRoutes";
import PublicRoute from "../shared/components/Routes/PublicRoutes";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ProjectListPage = lazy(() => import("../pages/ProjectListPage"));
const SprintsListPage = lazy(() => import("../pages/ProjectPage"));
const SprintPage = lazy(() => import("../pages/SprintPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute restricted exact path="/" redirectTo="/projects">
          <LoginPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/signup" redirectTo="/login">
          <RegisterPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/login">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute exact path="/projects" redirectTo="/login">
          <ProjectListPage />
        </PrivateRoute>
        <PrivateRoute exact path="/projects/:projectId/sprints" redirectTo="/login">
          <SprintsListPage />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/projects/:projectId/sprints/:sprintId"
          redirectTo="/login"
        >
          <SprintPage/>
        </PrivateRoute>
      </Switch>
    </Suspense>
  );
};
export default Routes;
