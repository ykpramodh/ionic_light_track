// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


 .controller("MyCtrl", function ($scope, $interval){

      function onSuccess(values) {
          $scope.state = values[0];
      };

      document.addEventListener("deviceready", function () {

        sensors.enableSensor("LIGHT");

        $interval(function(){
          sensors.getState(onSuccess);
        }, 100);


      }, false);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.cordova){
        
        window.light = window.cordova.require("cordova-plugin-lightSensor.light");
        
        window.light.enableSensor();
        
        function onSuccess(state) {
            alert('Light Sensor state: ' + state);
        };

        setInterval(function(){
          window.light.getLightState(onSuccess);
        }, 1000);
        
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
