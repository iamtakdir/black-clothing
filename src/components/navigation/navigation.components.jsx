import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
