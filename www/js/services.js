'use strict';

/*
 * SERVICE: get youtube data using Promises
 * https://docs.angularjs.org/api/ng/service/$q
 */
heavychef.service('youTubeService', function ($http, $q) {
   var deferred = $q.defer();
   $http.get('data/youtube.playlistItems.list.json').then(function (data) {
      deferred.resolve(data);
   });

   this.fetchMyData = function () {
      return deferred.promise;
   }
});

/*
 * A service that helps you run functions asynchronously,
 * and use their return values (or exceptions) when they are done processing.
 */