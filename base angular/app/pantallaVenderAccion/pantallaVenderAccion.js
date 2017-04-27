/**
 * Created by Andro on 27-04-2017.
 */

'use strict';

angular.module('myApp.pantallaVenderAccion', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pantallaVenderAccion', {
            templateUrl: 'pantallaVenderAccion/pantallaVenderAccion.html',
            controller: 'viewpantallaVenderAccion'
        });
    }])

    .controller('viewpantallaVenderAccion', ['$scope', '$firebaseObject', '$firebaseArray', '$filter', '$rootScope',
        function($scope, $firebaseObject, $firebaseArray, $filter, $rootScope) {


            $scope.accion = $rootScope.accionSelecionada;
            $scope.precioTotal = $scope.accion.AllocationPrice;
            $scope.cantidadTotal = $scope.accion.AllocationQuantity ;


            $scope.generarVenta = function () {
                console.log("envie la accion a vender");
                $scope.idBorrador = firebase.database().ref().child('borradorVenta/').push().key;
                firebase.database().ref('/borradorVenta/'+$scope.idBorrador)
                    .set({
                        "Quantity":$scope.cantidadTotal,
                        "SharePrice": $scope.precioTotal,
                        "PriceType":"V",
                        "PortfolioId":100091,
                        "SettlementCurrency":"CLP",
                        "ShareName":  $scope.accion.Share,
                        "id":$scope.idBorrador

                    });


            }



        }]);