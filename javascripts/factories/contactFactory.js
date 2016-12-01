"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG) {

  var getContactList = function(){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
        .success(function(response){
          let contacts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            contacts.push(response[key]);
          });
          resolve(contacts);
          console.log("contacts", contacts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        });
    });
  };

  var postNewContact = function(newContact){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify({
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        phone1: newContact.phone1,
        phone1Type: newContact.phone1Type,
        phone2: newContact.phone2,
        phone2Type: newContact.phone2Type,
        birthday: newContact.birthday,
        email: newContact.email,
        addressLine1: newContact.addressLine1,
        addressLine2: newContact.addressLine2,
        city: newContact.city,
        state: newContact.state,
        zip: newContact.zip,
        country: newContact.country,
        group: newContact.group,
        favorite: newContact.favorite
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        });
    });
  };

  var deleteContact = function(itemId){
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
      .success((deleteResponse) => {
          resolve(deleteResponse);
      })
      .error((deleteError) => {
          reject(deleteError);
      });
    });
  };

  var getSingleContact = function(contactId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
      .success(function(getSingleContactResponse){
        resolve(getSingleContactResponse);
      })
      .error(function(getSingleContactError){
        reject(getSingleContactError);
      });
    });
  };

  var editContact = function(editItem) {
      console.log("factory edit", editItem);
      return $q((resolve, reject)  => {
          $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editItem.id}.json`,
            JSON.stringify({
              firstName: editItem.firstName,
              lastName: editItem.lastName,
              phone1: editItem.phone1,
              phone1Type: editItem.phone1Type,
              phone2: editItem.phone2,
              phone2Type: editItem.phone2Type,
              birthday: editItem.birthday,
              email: editItem.email,
              addressLine1: editItem.addressLine1,
              addressLine2: editItem.addressLine2,
              city: editItem.city,
              state: editItem.state,
              zip: editItem.zip,
              country: editItem.country,
              group: editItem.group,
              favorite: editItem.favorite
            })
           )
          .success((editResponse) => {
              resolve(editResponse);
          })
          .error((editError) => {
              reject(editError);
          });
      });
  };

  return {getContactList:getContactList, postNewContact:postNewContact, deleteContact:deleteContact, getSingleContact:getSingleContact, editContact:editContact};

});
