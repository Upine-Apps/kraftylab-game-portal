import axios from "axios";

export default class IcebreakerService {
  static hostUrl = "http://localhost:3000/icebreaker"; //local url
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

  static async getAllIcebreakers() {
    try {
      const res = await axios.get(`${this.hostUrl}/all`, {
        headers: this.headers,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
