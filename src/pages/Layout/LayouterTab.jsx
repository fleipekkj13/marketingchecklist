import { Outlet, Link } from "react-router-dom";
//import Styles from  './layout.module.css'

const LayouterTab = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><i class="fa fa-home"></i></Link>
          </li>
          <li>
            <Link to="/marketing"><i class="fa fa-file"></i></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default LayouterTab;
