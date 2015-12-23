'use strict';
/**
 * @ngdoc function
 * @name shoppingAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingAppApp
 */
angular.module('shoppingAppApp')
    .controller('MainCtrl', function ($scope, $http, shoppingCart) {
    $scope.products = [];
    $http.get('data.json')
        .success(function (resp) {
        $scope.products = resp;
    });
    $scope.addProduct = function (prod) {
        for (var i = 0; i < shoppingCart.cart.length; i++) {
            if (shoppingCart.cart[i].name === prod.name) {
                shoppingCart.cart.splice(i, 1);
            }
        }
        shoppingCart.cart.push(prod);
        var statusUpdate = new Product.Updater(true);
        statusUpdate.update(prod);
        //prod.status = true;
    };
})
    .service('shoppingCart', function () {
    this.cart = [];
});
var Product;
(function (Product) {
    var Updater = (function () {
        function Updater(value) {
            this.value = value;
        }
        Updater.prototype.update = function (prod) {
            prod.status = true;
            return prod;
        };
        return Updater;
    })();
    Product.Updater = Updater;
})(Product || (Product = {}));
