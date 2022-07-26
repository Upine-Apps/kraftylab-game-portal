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
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async loginUser(obj) {
    try {
      const res = await axios.post(`${this.hostUrl}/login`, obj, {
        headers: this.headers,
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async verifyUser(obj) {
    try {
      const res = await axios.post(`${this.hostUrl}/validate-email`, obj, {
        headers: this.headers,
      });
    } catch (error) {}
  }

  static async confirmPassword(obj) {
    try {
      const res = await axios.post(
        `${this.hostUrl}/complete-forgot-password`,
        obj,
        {
          headers: this.headers,
        }
      );
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
