import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./services/auth";
import Nav from "./components/Nav/Nav";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";

function App() {
  const loggedIn = Auth.loggedIn();

  const handleNavProfileClick = (e) => {
    e.preventDefault();
    const stillLoggedIn = Auth.loggedIn();
    if (stillLoggedIn) {
      window.location.href = "/profile";
    } else {
      window.location.href = "/signIn";
    }
  };
  return (
    <div id="outer-container">
      <Nav />
      <main id="page-wrap" className="App">
        <Router>
          {loggedIn ? (
            <button
              id="profileButton"
              className="nav-button"
              onClick={handleNavProfileClick}
            >
              My Profile
            </button>
          ) : (
            <a href="/signIn">
              <button id="signInButton" className="nav-button">
                Sign in
              </button>
            </a>
          )}
          <a href="/signIn">
            <button id="signInButton" className="nav-button">
              Sign in
            </button>
          </a>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
