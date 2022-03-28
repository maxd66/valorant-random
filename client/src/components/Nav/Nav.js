import "./Nav.css";
import { reveal as Menu } from "react-burger-menu";

function Nav() {
  const styles = {
    bmItemList: {
      height: "90%",
    },
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
      <a id="profileNavLink" className="menu-item" href="/profile">
        My Profile
      </a>
    </Menu>
  );
}
export default Nav;
