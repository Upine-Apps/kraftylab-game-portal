import axios from "axios";
import Cookies from "universal-cookie";
export default class IcebreakerService {
  static hostUrl = "https://games.kraftylab.com:3001/icebreaker"; //local url
  static cookies = new Cookies();
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
        headers: {
          ...this.headers,
          access: this.cookies.get("access"),
          refresh: this.cookies.get("refresh"),
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getIcebreakerCategories() {
    try {
      const res = await axios.get(`${this.hostUrl}/categories`, {
        headers: {
          ...this.headers,
          access: this.cookies.get("access"),
          refresh: this.cookies.get("refresh"),
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getIcebreakerSubCategories(category) {
    try {
      const res = await axios.get(`${this.hostUrl}/subcategories`, {
        params: { category: category },
        headers: {
          ...this.headers,
          access: this.cookies.get("access"),
          refresh: this.cookies.get("refresh"),
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getRandomIcebreaker() {
    try {
      const res = await axios.get(`${this.hostUrl}`, {
        headers: {
          ...this.headers,
          access: this.cookies.get("access"),
          refresh: this.cookies.get("refresh"),
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getIcebreakerByCatSubCat(category, subcategory) {
    try {
      let url = `${this.hostUrl}/category?category=${category}`;
      if (subcategory) {
        url += `&subcategory=${subcategory}`;
      }
      const res = await axios.get(url, {
        headers: {
          ...this.headers,
          access: this.cookies.get("access"),
          refresh: this.cookies.get("refresh"),
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
