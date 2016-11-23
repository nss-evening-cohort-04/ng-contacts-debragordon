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

  var postNewContact = function(newItem){
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
        url: newContact.url,
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

  var editContact = function(editItem){

  };

  return {getContactList:getContactList, postNewContact:postNewContact, deleteContact:deleteContact, getSingleContact:getSingleContact, editContact:editContact};

});
