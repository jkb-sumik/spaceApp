import { Fragment } from "react";
import { ReactComponent as RocketLogo } from "../../assets/rocket-1.svg";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <RocketLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/news">NEWS</NavLink>
          <NavLink to="/pictures">PICTURES</NavLink>
          <NavLink to="/favorites">FAVORITES</NavLink>
          <NavLink to="/auth">SIGN IN</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
