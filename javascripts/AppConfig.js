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
      templateUrl: 'partials/all-favorites.html',
      controller: 'ContactsFavsCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/all-groups.html',
      controller: 'ContactsGroupsCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/login.html',
      controller: 'ContactsLoginCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/contact-details.html',
      controller: 'ContactsDetailCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/edit.html',
      controller: 'ContactsEditCtrl'
    })
    .otherwise('/contacts/list');
});