import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div id="outer-container">
      <Nav />
      <main id="page-wrap" className="App">
        <header className="App-header">
          <a href="/signIn">
            <button id="signInButton" className="nav-button">
              Sign in
            </button>
          </a>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </div>
  );
}

export default App;
