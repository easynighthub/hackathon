/**
 * Created by Andro on 27-04-2017.
 */

'use strict';

angular.module('myApp.user', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user', {
            templateUrl: 'user/user.html',
            controller: 'viewuser'
        });
    }])

    .controller('viewuser', ['$scope', '$firebaseObject', '$firebaseArray', '$filter', '$rootScope',
        function($scope, $firebaseObject, $firebaseArray, $filter, $rootScope) {

            $scope.nombre = "";
            $scope.dinero = "";
            var user = firebase.auth().currentUser;
            var ref = firebase.database().ref('/user/').child('lkyrRrfJ6DaMlIXGAgC8NPZmMU92');
            var usersLocal = $firebaseObject(ref);
            usersLocal.$loaded().then(function () {
                $scope.user = usersLocal;
                console.log($scope.user);

            });

            $scope.comprarConKipu = function () {
console.log( $scope.user.dinero);
console.log($scope.cantidadComprar);

                firebase.database().ref('/user/lkyrRrfJ6DaMlIXGAgC8NPZmMU92')
                    .update({
                        "dinero": $scope.user.dinero+$scope.cantidadComprar
                    });


            }

        }]);