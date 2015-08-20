'use strict';


heavychef.directive('TalksCardItem', function ($compile) {

   var listCardItem = '<div class="list card"><img class="full-image" src="../img/RandFishkin.jpg"><div class="item item-avatar"><img src="../img/profile-rand-fishkin.jpg"><h2>Rand Fishkin</h2><p>November 10, 2014</p></div><div class="item item-body"><p>{{items.description}}</p><p><a href="#" class="subdued">1 Like</a><a href="#" class="subdued">5 Comments</a></p></div><div class="item tabs tabs-secondary tabs-icon-left"><a class="tab-item" href="#"><i class="icon ion-thumbsup"></i>Like</a><a class="tab-item" href="#"><i class="icon ion-chatbox"></i>Comment</a><a class="tab-item" href="#"><i class="icon ion-share"></i>Share</a></div></div>'

   var getTemplate = function(contentType) {

      var template = '';



   };

   return {
      restricted: 'E',
      link: linker,
      scope: {
         content: '='
      }
   }
});
