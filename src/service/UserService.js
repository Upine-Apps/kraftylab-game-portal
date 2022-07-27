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
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  }

  static async loginUser(obj) {
    try {
      const res = await axios.post(`${this.hostUrl}/login`, obj, {
        headers: this.headers,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  }

  static async verifyUser(obj) {
    try {
      const res = await axios.post(`${this.hostUrl}/validate-email`, obj, {
        headers: this.headers,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        return error.response.data;
      } else {
        return error;
      }
    }
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
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  }
}
