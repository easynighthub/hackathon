/**
 * Created by Andro on 27-04-2017.
 */
/**
 * Created by Andro on 26-04-2017.
 */


'use strict';

angular.module('myApp.pantallaComprar', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pantallaComprar', {
            templateUrl: 'pantallaComprar/pantallaComprar.html',
            controller: 'viewpantallaComprar'
        });
    }])

    .controller('viewpantallaComprar', ['$scope', '$firebaseObject', '$firebaseArray', '$filter', '$rootScope',
        function($scope, $firebaseObject, $firebaseArray, $filter, $rootScope) {


            $scope.accion = $rootScope.accionSelecionada;
            console.log($scope.accion );


        }]);