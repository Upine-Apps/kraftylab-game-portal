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

  static async startForgotPassword(obj) {
    try {
      const res = await axios.post(
        `${this.hostUrl}/start-forgot-password`,
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
