/**
 * Created by Andro on 27-04-2017.
 */


'use strict';

angular.module('myApp.pantallaVenta', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pantallaVenta', {
            templateUrl: 'pantallaVenta/pantallaVenta.html',
            controller: 'viewpantallaVenta'
        });
    }])

    .controller('viewpantallaVenta', ['$scope', '$firebaseObject', '$firebaseArray', '$filter', '$rootScope',
        function($scope, $firebaseObject, $firebaseArray, $filter, $rootScope) {



            $scope.misAcciones = [];

            var misAccionesRQ = $firebaseArray(firebase.database().ref('portafolio/100091/0').child('results'));


            misAccionesRQ.$loaded().then(function () {
                console.log(misAccionesRQ);
                $scope.todasMisAcciones = misAccionesRQ;
            });


            $scope.vender = function (accion) {
                console.log(accion + "log click");
                console.log("envie la accion a comprar");
                $rootScope.accionSelecionada = accion;
                location.href = "#!/pantallaVenderAccion";
            }



        }]);