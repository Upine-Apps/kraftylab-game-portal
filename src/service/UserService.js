import axios from "axios";

export default class UserService {
  static hostUrl = "http://localhost:3000/user"; // local url
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Headers": "content-type",
  };

  static getUrl() {
    return this.hostUrl;
  }

  static getHeaders() {
    return this.headers;
  }

  /*
    Add your other user methods here. 
    Make sure you prefix them with `static` so we can access them
    without making an instance of the class
  */

  static async registerUser(obj) {
    try {
      const res = await axios.post(this.hostUrl, obj, {
        headers: this.headers,
      });
      return res;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
