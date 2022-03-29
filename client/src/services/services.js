import Auth from "./auth";
//this is undefined because during development I am using a proxy
const dbLink = "";
const valorantApiLink = "https://valorant-api.com/v1";

class ApiCalls {
  async getSingleUser(userId, token) {
    const url = `${dbLink}/api/user/${userId}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async createUser(data) {
    try {
      const url = `${dbLink}/api/user`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      Auth.login(response.token);
      return await response.json();
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async getAllAgents() {
    try {
      const localInfo = localStorage.getItem("allAgents");
      if (localInfo) {
        const storedDate = localStorage.getItem("agentDate");
        const staleData = this.checkForStaleInfo(storedDate);
        if (!staleData) {
          return localInfo;
        }
      }
      const url = `${valorantApiLink}/agents`;
      const agentInfo = await fetch(url);
      const deliverable = await agentInfo.json();
      localStorage.setItem("allAgents", deliverable);
      const today = new Date();
      localStorage.setItem("agentDate", {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
      });
      return deliverable;
    } catch (err) {
      console.log(err);
    }
  }

  async getOneAgent(agentId) {
    try {
      const url = `${valorantApiLink}/agents/${agentId}`;
      const agentInfo = await fetch(url);
      if (agentInfo.status === 200) {
        return await agentInfo.json();
      } else {
        return "agent not found";
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAllWeapons() {
    try {
      const localInfo = localStorage.getItem("allWeapons");
      if (localInfo) {
        const storedDate = localStorage.getItem("weaponDate");
        const staleData = this.checkForStaleInfo(storedDate);
        if (!staleData) {
          return localInfo;
        }
      }
      const url = `${valorantApiLink}/weapons`;
      const weaponInfo = await fetch(url);
      const deliverable = await weaponInfo.json();
      localStorage.setItem("allWeapons", deliverable);
      const today = new Date();
      localStorage.setItem("weaponDate", {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
      });
      return deliverable;
    } catch (err) {
      console.log(err);
    }
  }

  checkForStaleInfo(date) {
    if (!date) {
      return false;
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const oldYear = date.year;
    const oldMonth = date.month;
    const oldDay = date.day;
    if (oldYear < year) {
      return true;
    } else if (oldMonth < month) {
      return true;
    } else if (oldDay < day) {
      return true;
    } else {
      return false;
    }
  }
}

export default new ApiCalls();
