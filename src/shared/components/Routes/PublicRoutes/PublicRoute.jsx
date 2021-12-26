import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userCheck } from "../../../../redux/auth/auth-selectors";
import useAuth from "../../../hooks/useAuth";

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) => {
  // const isLoggedIn = useSelector(userCheck)
  const isLoggedIn = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
