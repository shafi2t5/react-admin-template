import * as React from "react";
import LoginForm from "../components/form/login";

export interface Props {
  title?: string;
}

const Login: React.FC<Props> = () => {
  return (
    <div className="">
      <LoginForm />
    </div>
  );
};

export default Login;
