'use strict';

angular.module('starter.controllers', [])

   .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
      // Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
         scope: $scope
      }).then(function (modal) {
         $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function () {
         $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function () {
         $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function () {
         console.log('Doing login', $scope.loginData);

         // Simulate a login delay. Remove this and replace with your login
         // code if using a login system
         $timeout(function () {
            $scope.closeLogin();
         }, 1000);
      };
   })

   .controller('TalksCtrl', function ($scope) {
      $scope.talks = [
         {title: 'Development', id: 1},
         {title: 'Media', id: 2},
         {title: 'SEO', id: 3},
         {title: 'Online Marketing', id: 4},
         {title: 'Law', id: 5},
         {title: 'Chat', id: 6}
      ];
   })

   // SERVICE: get youtube data using Promises
   heavychef.service('youTubeService', function ($http, $q) {

      var deferred = $q.defer();

      $http.get('data/youtube.playlistItems.list.json').then(function (data) {

         deferred.resolve(data);

      });

      this.getItems = function () {
         return deferred.promise;
      }

   })

   .controller('TalksCardCtrl', function ($scope, youTubeService) {
      var promise = youTubeService.getItems();
      promise.then(function (data) {
         $scope.items = data;
         console.log($scope.items);
      })
   });


   // not using promises
   /*
   .controller('TalksCardCtrl', function ($scope, $stateParams, $http) {
      $http.get('data/youtube.playlistItems.list.json').success(function (data) {
         $scope.items = data.items;
         console.log($scope.items);
      });

   });
   */