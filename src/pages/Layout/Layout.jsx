import { Outlet, Link } from "react-router-dom";

import LayouerTab from './LayouterTab'

const Layout = () => {
  return (
    <div>
      <LayouerTab />
      <Outlet />
    </div>
  )
};

export default Layout;
