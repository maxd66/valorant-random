import Auth from "./auth";
//this is undefined because during development I am using a proxy
const dbLink = "";

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
}

export default new ApiCalls();
