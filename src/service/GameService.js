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
    socket.on("on_user_joined", ({ firstName, lastName }) => {
      listener(firstName, lastName);
    });
  }

  async updateUsers(socket, users) {
    socket.emit("update_users", { users });
  }

  async onUpdatedUsers(socket, listener) {
    socket.on("on_updated_users", ({ users }) => {
      listener(users);
    });
  }

  async startGame(socket, icebreaker) {
    socket.emit("start_game", { icebreaker });
  }

  async onGameStarted(socket, listener) {
    socket.on("game_started", ({ icebreaker }) => {
      listener(icebreaker);
    });
  }
  async changeCategory(socket, icebreaker) {
    socket.emit("change_category", { icebreaker });
  }

  async onCategoryChanged(socket, listener) {
    socket.on("category_changed", ({ icebreaker }) => {
      listener(icebreaker);
    });
  }

  async submitAnswer(socket, answer, userId, firstName, lastName) {
    socket.emit("submit_answer", { answer, userId, firstName, lastName });
  }

  async onAnswerSubmitted(socket, listener) {
    socket.on(
      "on_answer_submitted",
      ({ answer, userId, firstName, lastName }) => {
        listener({ answer, userId, firstName, lastName });
      }
    );
  }

  async handleEndRound(socket, allAnswers) {
    socket.emit("end_round", allAnswers);
  }

  async onRoundEnded(socket, listener) {
    socket.on("round_ended", (allAnswers) => {
      listener(allAnswers);
    });
  }

  async handleNewRound(socket, icebreaker) {
    socket.emit("new_round", icebreaker);
  }

  async onNewRound(socket, listener) {
    socket.on("new_round_started", (icebreaker) => {
      listener(icebreaker);
    });
  }

  async handleEndSession(socket) {
    socket.emit("end_session");
  }

  async onSessionEnded(socket, listener) {
    const x = true;
    socket.on("session_ended", (x) => {
      listener(x);
    });
  }
}

export default new GameService();
