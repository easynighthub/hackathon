/**
 * Created by Andro on 26-04-2017.
 */


'use strict';

angular.module('myApp.pantallaGeneral', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pantallaGeneral', {
            templateUrl: 'pantallaGeneral/pantallaGeneral.html',
            controller: 'viewpantallaGeneral'
        });
    }])

    .controller('viewpantallaGeneral', ['$scope', '$firebaseObject', '$firebaseArray', '$filter', '$rootScope',
        function($scope, $firebaseObject, $firebaseArray, $filter, $rootScope) {






        }]);