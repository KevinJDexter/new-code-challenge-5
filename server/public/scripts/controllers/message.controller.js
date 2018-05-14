app.controller('MessageBoardController', ['MessageBoardService', function(MessageBoardServive) {
  console.log('Message Board Controller loaded');

  var self = this;

  self.newMessage = MessageBoardServive.newMessage;
  self.messages = MessageBoardServive.messages;

  self.getMessages = MessageBoardServive.getMessages;
  self.addMessage = MessageBoardServive.addMessage;

  self.init = function () {
    self.getMessages();
  }

  self.init();
}])