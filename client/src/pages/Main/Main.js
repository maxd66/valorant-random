import React, { useState, useEffect } from "react";
import Auth from "../../services/auth";
import apiCalls from "../../services/services";
import randomizer from "../../services/randomizer";

function Main() {
  const [isLoading, setLoading] = useState(true);
  const [randomizerState, setRandomizerState] = useState("agent");
  const [randomFormArray, setRandomFormArray] = useState([]);

  const handleHeaderClick = (event) => {
    const buttonClicked = event.target.id;
    setRandomizerState(buttonClicked);
  };

  useEffect(() => {
    apiCalls.getAllAgents().then((response) => {
      setRandomFormArray(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let initialLoad = true;

  const generateRandomForm = () => {
    //need to request strategies filtered by the user parameters.
    //need to rethink this loading system, needs to be a function of a click
    //so that I can run it async. I think I should redesign so that it returns
    //the form for agent selection, and on click of any of the headers, it will
    //run this function and rewrite the body after the api has been called.
    switch (randomizerState) {
      case "agent":
        if (!initialLoad) {
          apiCalls
            .getAllAgents()
            .then((response) => {
              setRandomFormArray(response.data);
              return (
                <div>
                  <h1>Agent form {randomFormArray[0].displayName}</h1>
                </div>
              );
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          return (
            <div>
              <h1>Agent form {randomFormArray[0].displayName}</h1>
            </div>
          );
        }
        break;
      case "weapon":
        apiCalls
          .getAllWeapons()
          .then((response) => {
            setRandomFormArray(response.data);
            return (
              <div>
                <h1>Weapon form {randomFormArray[0].displayName}</h1>
              </div>
            );
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "strategy":
        // No api call yet, will run the call when the user inputs parameters
        return (
          <div>
            <h1>Strategy form {randomFormArray[0].title}</h1>
          </div>
        );

      default:
        break;
    }
  };
  return (
    <div>
      <h1>Main</h1>
      <p>Hey there I'm trying to see if this is working or not</p>
      <section>
        <button
          id="agent"
          className="header-button active"
          onClick={handleHeaderClick}
        >
          Random Agent
        </button>
        <button
          id="weapon"
          className="header-button"
          onClick={handleHeaderClick}
        >
          Random Weapon
        </button>
        <button
          id="strategy"
          className="header-button"
          onClick={handleHeaderClick}
        >
          Random Strategy
        </button>
      </section>
      <main>{generateRandomForm}</main>
    </div>
  );
}

export default Main;
