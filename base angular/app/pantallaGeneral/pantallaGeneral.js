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


                var indiceBolsaRequest = $firebaseArray(firebase.database().ref().child('ipsa/0')); // los mas usados
            var ultimosPreciosRequest = $firebaseArray(firebase.database().ref().child('todos/0'));


            indiceBolsaRequest.$loaded().then(function () {
                    console.log(indiceBolsaRequest);
                    $scope.todasLasAcciones = indiceBolsaRequest;
                ultimosPreciosRequest.$loaded().then(function () {
                    console.log(ultimosPreciosRequest);
                    $scope.ultimosPrecios = ultimosPreciosRequest;


                    $scope.todasLasAcciones.forEach(function (acciones)  {
                         $scope.ultimosPrecios.forEach(function (ultimos)      {
                                if(acciones.NEMO == ultimos.NEMO){
                                    $scope.accionesCompletas.push(ultimos);
                                }


                        });



                    });


                });
            });


            $scope.comprar = function (accion) {
                console.log(accion + "log click");
                console.log("envie la accion a comprar");
                $rootScope.accionSelecionada = accion;
                location.href = "#!/pantallaComprar";
            }


        }]);