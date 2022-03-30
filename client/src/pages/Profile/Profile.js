import React, { useEffect, useState } from "react";
import Auth from "../../services/auth";
import apiCalls from "../../services/services";

function Profile() {
  const [isLoading, setLoading] = useState(true);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const userId = Auth.getProfile()._id;
    apiCalls.getSingleUser(userId, Auth.getToken()).then((response) => {
      setUserData(response);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  //   async function generateAgentList(userInfo) {
  //     let agentListHtml = ``;
  //     const agentArr = userInfo.userHistory.lastTenAgents;
  //     const apiResponse = await apiCalls.getAllAgents();
  //     for (let i = 0; i < agentArr.length; i++) {
  //       //make call to valorant api, generate agent based on user history
  //       const allAgents = apiResponse.data;
  //       const thisAgent = allAgents.filter((agent) => {
  //         return agent.uuid === agentArr[i];
  //       });
  //       const agentHtml = `      <div className="agentThumbnailContainer">
  //       <img
  //         alt="portrait of ${thisAgent[0].displayName}"
  //         src="${thisAgent[0].bustPortrait}"
  //       />
  //     </div>`;
  //       agentListHtml += agentHtml;
  //     }
  //     return agentListHtml;
  //   }
  return (
    <div>
      <h1>User: {userData?.username}</h1>
      <fieldset id="agentsGenerated">
        <legend className="legend">Agents Generated</legend>
      </fieldset>
      <fieldset id="weaponsGenerated">
        <legend className="legend">Weapons Generated</legend>
      </fieldset>
      <fieldset id="strategiesGenerated">
        <legend className="legend">Strategies Generated</legend>
      </fieldset>
      {/* <div id="agentListContainer">{generateAgentList(userData)}</div> */}
    </div>
  );
}

export default Profile;
