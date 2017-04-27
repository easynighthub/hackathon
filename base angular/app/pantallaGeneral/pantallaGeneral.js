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


            $scope.accionesCompletas = [];


                var indiceBolsaRequest = $firebaseArray(firebase.database().ref().child('instrumento_IndiceResult')); // los mas usados
            var ultimosPreciosRequest = $firebaseArray(firebase.database().ref().child('INSTRUMENTResult'));


            indiceBolsaRequest.$loaded().then(function () {
                    console.log(indiceBolsaRequest);
                    $scope.todasLasAcciones = indiceBolsaRequest;
                ultimosPreciosRequest.$loaded().then(function () {
                    console.log(ultimosPreciosRequest);
                    $scope.ultimosPrecios = ultimosPreciosRequest;


                    $scope.todasLasAcciones.forEach(function (acciones) {
                        $scope.ultimosPrecios.forEach(function (ultimos) {
                                if(acciones.NEMO == ultimos.NEMO){
                                    $scope.accionesCompletas.push(ultimos);
                                }


                        });



                    });


                });
            });



        }]);