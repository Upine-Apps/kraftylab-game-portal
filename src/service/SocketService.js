import { io } from "socket.io-client";
class SocketService {
  socket = null;

  connect(url) {
    return new Promise((resolve, reject) => {
      this.socket = io(url);
      if (!this.socket) {
        return reject();
      }
      this.socket.on("connect", () => {
        resolve(this.socket);
      });
      this.socket.on("connect_error", (err) => {
        console.log("connection failed", err);
        reject(err);
      });
    });
  }
}

export default new SocketService();
