import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div id="outer-container">
      <Nav />
      <main id="page-wrap" className="App">
        <Router>
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
        </Router>
      </main>
    </div>
  );
}

export default App;
