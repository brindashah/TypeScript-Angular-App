'use strict';

/**
 * @ngdoc function
 * @name shoppingAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shoppingAppApp
 */
angular.module('shoppingAppApp')
  .controller('AboutCtrl', function ($scope,shoppingCart) {
  	$scope.orderPlaced=false;
  	$scope.reviewMode=false;
    $scope.items = shoppingCart.cart;
    $scope.total = 0;
    $scope.refreshTotal = function(){
    	$scope.total = 0;
    	for(var i=0; i<$scope.items.length;i++){
    	$scope.total += $scope.items[i].price * $scope.items[i].quantity;
    	}
    };
    $scope.refreshTotal();

    $scope.actionButton = function(act){
    	if(act==='buy'){
    		$scope.orderPlaced=true;
    		shoppingCart.cart = [];
    	}else{
    		$scope.reviewMode=!$scope.reviewMode;
    		if($scope.reviewMode===false){
    			$scope.refreshTotal();
    		}
    	}
    };

    $scope.deleteItem = function(i){
    	window.alert("hello");
    	shoppingCart.cart.splice(i,1);
    	$scope.items = shoppingCart.cart;
    };


   
  });
