'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'firebase',
    'ngRoute',
    'ngMap',
    'ngMaterial',
    'myApp.pantallaGeneral',
    'myApp.pantallaComprar'

]).
config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/pantallaGeneral'});



        var signOutButton = document.getElementById('sign-out-button');

        signOutButton.addEventListener('click', function() {
            firebase.auth().signOut();

            window.location.href = '/';
        });






    }]);