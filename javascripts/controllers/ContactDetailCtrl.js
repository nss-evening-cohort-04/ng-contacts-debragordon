"use strict";

app.controller("ContactDetailCtrl", function ($scope, $routeParams, ContactFactory){

  $scope.selectedContact = {};

  let contactId = $routeParams.id;
  console.log("contactId", contactId);

  ContactFactory.getSingleContact(contactId).then(function(oneContact){
    oneContact.id = contactId;
    console.log("oneContact", oneContact);
    $scope.selectedContact = oneContact;
  });

// editContact FUNCTION

});