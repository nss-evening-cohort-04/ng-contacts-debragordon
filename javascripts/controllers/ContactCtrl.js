"use strict";

app.controller("ContactCtrl", function ($scope, ContactFactory){
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newContact = {};
  $scope.contacts = [];

  let getContacts = function(){
    ContactFactory.getContactList().then(function(fbContacts){
      $scope.contacts = fbContacts;
    });
  };

  getContacts();

  $scope.allContacts = function(){
    $scope.showListView = true;
  };

  $scope.newContact = function(){
    $scope.showListView = false;
  };

  $scope.addNewContact = function(){
    ContactFactory.postNewContact($scope.newContact).then(function(itemId){
      getContacts();
      $scope.newContact = {};
      $scope.showListView = true;
    });
  };
});