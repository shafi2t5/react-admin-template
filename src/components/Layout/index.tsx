import * as React from "react";
import { Outlet } from "react-router-dom";

export interface Props {
  title?: string;
}

const Layout: React.FC<Props> = () => {
  return (
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
};

export default Layout;
