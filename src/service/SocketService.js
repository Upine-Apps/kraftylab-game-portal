import { io } from "socket.io-client";
class SocketService {
  socket = null;

  connect() {
    return new Promise((resolve, reject) => {
      this.socket = io("http://172.31.42.243:6969");
      if (!this.socket) {
        return reject();
      }
      this.socket.on("connect", () => {
        resolve(this.socket);
      });
      this.socket.on("connect_error", (err) => {
        reject(err);
      });
    });
  }
}

export default new SocketService();
