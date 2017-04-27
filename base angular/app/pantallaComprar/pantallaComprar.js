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
            $scope.precioTotal = $scope.accion.PRECIO_COMPRA;
            $scope.cantidadTotal = 0 ;


            $scope.generarOrden = function () {
                console.log("envie la accion a comprar");
                $scope.idBorrador = firebase.database().ref().child('borrador/').push().key;
                firebase.database().ref('/borrador/'+$scope.idBorrador)
                    .set({
                        "Quantity":$scope.cantidadTotal,
                        "SharePrice": $scope.precioTotal,
                        "PriceType":"M",
                        "PortfolioId":100091,
                        "SettlementCurrency":"CLP",
                        "ShareName":   $scope.accion.NEMO

                    });


            }



        }]);