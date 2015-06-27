angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

     var clientId = '503911641847-tlpt59ndek9c3aubq2bhpe9p0t3bjeir.apps.googleusercontent.com';
     var apiKey = '';
     var scopes = '';

     function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth,1);
     }

     function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
        return false;
     }

     function makeApisCall(){
        gapi.client
     }


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TalksCtrl', function($scope) {
  $scope.talks = [
    { title: 'Development', id: 1 },
    { title: 'Media', id: 2 },
    { title: 'SEO', id: 3 },
    { title: 'Online Marketing', id: 4 },
    { title: 'Law', id: 5 },
    { title: 'Chat', id: 6 }
  ];
})

.controller('TalksCtrl', function($scope, $stateParams) {
});
