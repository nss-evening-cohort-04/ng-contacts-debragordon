"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when('/contacts/list', {
      templateUrl: 'partials/all-contacts.html',
      controller: 'ContactsAllCtrl'
    })
    .when('/contacts/add', {
      templateUrl: 'partials/add-contacts.html',
      controller: 'ContactsNewCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/all-contacts.html',
      controller: 'ContactsAllCtrl'
    })
    .otherwise('/contacts/list');
});