import "./Nav.css";
import { slide as Menu } from "react-burger-menu";
import Auth from "../../services/auth";

function Nav() {
  const styles = {
    bmItemList: {
      height: "90%",
    },
  };
  const loggedIn = Auth.loggedIn();

  const generateCreateAccountLink = () => {
    if (!loggedIn) {
      return (
        <a id="signUpNavLink" className="menu-item" href="/signUp">
          Create an account
        </a>
      );
    }
  };
  return (
    <Menu
      right
      styles={styles}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <a id="homeNavLink" className="menu-item" href="/">
        Home
      </a>
      {loggedIn ? (
        <a id="profileNavLink" className="menu-item" href="/profile">
          My Profile
        </a>
      ) : (
        <a id="signInNavLink" className="menu-item" href="/signIn">
          Sign in
        </a>
      )}
      {generateCreateAccountLink()}
    </Menu>
  );
}
export default Nav;
