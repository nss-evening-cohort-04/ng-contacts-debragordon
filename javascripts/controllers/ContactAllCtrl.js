"use strict";

app.controller("ContactAllCtrl", function ($scope, $location, ContactFactory){
  $scope.contacts = [];

  ContactFactory.getContactList().then(function(contactArray){
    $scope.contacts = contactArray;
  });
// viewContact FUNCTION
  $scope.viewContact = function(contactId){
    $location.url(`/contacts/details/${contactId}`);
  };
// deleteContact FUNCTION

// makeFavoriteContact FUNCTION

});