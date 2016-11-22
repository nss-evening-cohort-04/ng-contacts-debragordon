"use strict";

app.controller("ContactDetailCtrl", function ($scope, $routeParams, ContactFactory){

$scope.selectedContact = {};
  let contactId = $routeParams.id;
  ContactFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id = contactId;
    $scope.selectedContact = oneContact;
  });

// editContact FUNCTION

});