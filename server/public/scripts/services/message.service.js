app.service('MessageBoardService', ['$http', '$mdDialog', '$mdToast', function($http, $mdDialog, $mdToast) {
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
        $mdDialog.show(
          $mdDialog.alert()
            .title('Error')
            .textContent('We were unable to load messages from the Database! Please refresh in a few minutes.')
            .ok('Ok')
        )
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
        $mdToast.show(
          $mdToast.simple()
            .textContent('Message added')
        )
      })
      .catch(function (error) {
        console.log('error in POST /message', error);
        $mdDialog.show(
          $mdDialog.alert()
            .title('Error')
            .textContent('Something went wrong! Please try again in a few minutes.')
            .ok('Ok')
        )
      })
  }

  self.clearNewMessage = function () {
    self.newMessage.name = '';
    self.newMessage.message = '';
  }
}])