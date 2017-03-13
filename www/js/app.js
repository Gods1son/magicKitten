// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

    });
  })
  .controller('MainCtrl', function ($scope, $http) {
    $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ec06d9fc8174525e2a5725388d751489&tags=kittens&format=json&nojsoncallback=1&api_sig=f928d83a55cab7967a61a769ac2d2d16").then(
      function(data){
        $scope.aKittens = data.data.photos.photo;
        $scope.next();
      }
    );
    $scope.next = function () {
      var nRandom = Math.floor(Math.random() * $scope.aKittens.length);
      var oRandom = $scope.aKittens[nRandom];
        $scope.current = {file: 
        "https://farm" + oRandom.farm + ".staticflickr.com/" + oRandom.server
        + "/" + oRandom.id + "_" + oRandom.secret + ".jpg"};
    };
  });