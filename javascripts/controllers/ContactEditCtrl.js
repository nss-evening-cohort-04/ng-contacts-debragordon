"use strict";

app.controller("ContactEditCtrl", function ($scope, ContactFactory){

$scope.newContact = {};
  let itemId = $routeParams.id;

  ItemFactory.getSingleItem(itemId).then(function(oneItem){
    oneItem.id = itemId;
    $scope.newTask = oneItem;
  });

  $scope.addNewItem = function(){
    ItemFactory.editItem($scope.newTask).then(function(response){
      $scope.newTask = {};
      $location.url("/items/list");
    });
  };

  $scope.clearContactForm = function(){
    $scope.newContact = {};
  };

});