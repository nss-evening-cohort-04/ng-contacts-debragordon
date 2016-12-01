"use strict";

app.controller("ContactNewCtrl", function ($scope, $location, ContactFactory){
  $scope.newContact = {};

  $scope.clearContactForm = function(){
    $scope.newContact = {};
  };

  $scope.addNewContact = function(){
    ContactFactory.postNewContact($scope.newContact).then(function(itemId){
      $location.url('/contacts/list');
      $scope.clearContactForm();
    });
  };


});