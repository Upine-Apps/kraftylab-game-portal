import axios from "axios";

export default class UserService {
  static hostUrl = "http://localhost:3000/user"; //local url
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Headers": "content-type",
  };
  static getUrl() {
    return this.hostUrl;
  }

  /*
    Add your other user methods here. 
    Make sure you prefix them with `static` so we can access them
    without making an instance of the class
  */
  static confirmPassword(obj) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Headers": "content-type",
    };
    const res = axios.post(`${this.hostUrl}/complete-forgot-password`, obj, {
      headers,
    });
    console.log(headers);
    console.log(this.hostUrl);
    return res;
  }
}
