app.service('MessageBoardService', ['$http', function($http) {
  console.log('Message Board Service loaded');

  var self = this;

  self.newMessage = {
    name: '',
    message: ''
  }
  self.messages = { list: [] };
  
  self.getMessages = function () {
    $http({
      method: 'GET',
      url: '/message'
    })
      .then(function (response) {
        self.messages.list = response.data;
      })
      .catch(function (error) {
        console.log('error in GET /message', error);
      })
  }

  self.addMessage = function() {
    $http({
      method: 'POST', 
      url: '/message',
      data: self.newMessage
    })
      .then(function () {
        self.getMessages();
        self.clearNewMessage();
      })
      .catch(function (error) {
        console.log('error in POST /message', error);
      })
  }

  self.clearNewMessage = function () {
    self.newMessage.name = '';
    self.newMessage.message = '';
  }
}])