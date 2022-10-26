class GameService {
  socket = null;

  async joinGameRoom(socket, code) {
    return new Promise((resolve, reject) => {
      socket.emit("join_game", { code });
      socket.on("room_joined", () => resolve(true));
      socket.on("room_join_error", ({ error }) => reject(error));
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
}

export default new GameService();
