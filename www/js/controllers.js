'use strict';

angular.module('starter.controllers', [])

   yourTube.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
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
   });


   /*
    * SERVICE: get youtube data using Promises
    * https://docs.angularjs.org/api/ng/service/$q
    */
   yourTube.service('youTubeService', function ($http, $q) {
      var deferred = $q.defer();
      $http.get('data/youtube.playlistItems.list.json').then(function (data) {
         deferred.resolve(data);
      });

      this.fetchMyData = function () {
         return deferred.promise;
      }
   });

   // passing scope and youTubeService as parameters to the TalksCard Controller
   yourTube.controller('TalksCardCtrl', function ($scope, youTubeService) {

         var promise = youTubeService.fetchMyData();

         promise.then(function (data) {

            $scope.items = data;

            //window.scope = $scope;

            console.log($scope.items);
         });
   });


   // not using promises

   //.controller('TalksCardCtrl', function ($scope, $stateParams, $http) {
   //   $http.get('data/youtube.playlistItems.list.json').success(function (data) {
   //      $scope.items = data.items;
   //      console.log($scope.items);
   //   });
   //});
