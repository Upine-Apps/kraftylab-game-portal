class GameService {
  socket = null;

  async joinGameRoom(socket, roomId, isHost, firstName, lastName) {
    return new Promise((resolve, reject) => {
      socket.emit("join_game", { roomId, isHost, firstName, lastName });
      socket.on("room_joined", () => resolve(true));
      socket.on("room_join_error", ({ error }) => reject(error));
      socket.on("room_doesnt_exist", ({ error }) => reject(error));
    });
  }

  async updateGame(socket, answer) {
    socket.emit("update_game", { answer });
  }

  async onGameUpdate(socket, listener) {
    socket.on("on_game_update", ({ answer }) => {
      listener(answer);
    });
  }

  async onUserJoined(socket, listener) {
    console.log("OnUserJoined in GameService");

    socket.on("on_user_joined", ({ firstName, lastName }) => {
      console.log(firstName);
      listener(firstName, lastName);
    });
  }
}

export default new GameService();
