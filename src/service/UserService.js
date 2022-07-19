export default class UserService {
  static hostUrl = "http://localhost:3000/user"; //local url

  static getUrl() {
    return this.hostUrl;
  }

  /*
    Add your other user methods here. 
    Make sure you prefix them with `static` so we can access them
    without making an instance of the class
  */
}
