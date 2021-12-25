export const fetchToken = ({ auth }) => auth.token;

export const fetchEmail = ({ auth}) => auth.user.email;

export const userCheck = ({auth}) => auth.isLogin;