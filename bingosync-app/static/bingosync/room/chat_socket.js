var ChatSocket = (function () {
  "use strict";

  var ChatSocket = function (chatPanel, board, playersPanel, socketsUrl) {
    this.chatPanel = chatPanel;
    this.board = board;
    this.playersPanel = playersPanel;
    this.socketsUrl = socketsUrl;
  };

  ChatSocket.prototype.init = function (socketKey) {
    this.socketKey = socketKey;
    console.log(this.socketsUrl);
    this.chatSocket = new WebSocket(this.socketsUrl);

    this.chatSocket.onopen = this.onSocketOpen.bind(this);
    this.chatSocket.onmessage = this.onSocketMessage.bind(this);
    this.chatSocket.onclose = this.onSocketClose.bind(this);
    this.chatSocket.onerror = this.onSocketError.bind(this);
  };

  ChatSocket.prototype.onSocketOpen = function () {
    console.log("WebSocket opened");
    console.log("Sending socket key:", this.socketKey);
    this.chatSocket.send(JSON.stringify({ socket_key: this.socketKey }));
  };

  ChatSocket.prototype.onSocketClose = function () {
    var disconnectText = "*** Disconnected from server, try refreshing.";
    var message = $("<div>", {
      class: "connection-message",
      text: disconnectText,
    }).toHtml();
    this.chatPanel.appendChatMessage(message);
  };

  ChatSocket.prototype.onSocketError = function (event) {
    console.error("WebSocket error:", event);
  };

  ChatSocket.prototype.onSocketMessage = function (evt) {
    var json = JSON.parse(evt.data);
    console.log("Received message:", json);

    if (json["type"] === "error") {
      console.log("Error message from socket:", json);
      return;
    } else if (json["type"] === "goal") {
      this.board
        .getSquare(json["square"]["slot"])
        .setColors(json["square"]["colors"]);
      this.playersPanel.updateGoalCounters(this.board);
    } else if (json["type"] === "color") {
      this.playersPanel.setPlayer(json["player"]);
      this.playersPanel.updateGoalCounters(this.board);
    } else if (json["type"] === "connection") {
      if (
        json["event_type"] === "connected" &&
        !json["player"]["is_spectator"]
      ) {
        this.playersPanel.setPlayer(json["player"]);
        this.playersPanel.updateGoalCounters(this.board);
      } else if (json["event_type"] === "disconnected") {
        this.playersPanel.removePlayer(json["player"]);
      }
    } else if (json["type"] === "new-card") {
      $("#bingo-chat .new-card-message .seed-hidden")
        .text(ROOM_SETTINGS.seed)
        .removeClass("seed-hidden")
        .addClass("seed");
      refreshBoard();
    }

    this.chatPanel.handleEvent(json);
  };

  return ChatSocket;
})();
