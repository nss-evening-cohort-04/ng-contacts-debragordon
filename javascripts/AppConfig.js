"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/contacts/list', {
      templateUrl: 'partials/all-contacts.html',
      controller: 'ContactsAllCtrl'
    })
    .when('/contacts/add', {
      templateUrl: 'partials/add-contacts.html',
      controller: 'ContactsNewCtrl'
    })
    .when('/contacts/favorites', {
      templateUrl: 'partials/all-favorites.html',
      controller: 'ContactsFavsCtrl'
    })
    .when('/contacts/groups', {
      templateUrl: 'partials/all-groups.html',
      controller: 'ContactsGroupsCtrl'
    })
    .when('/contacts/details', {
      templateUrl: 'partials/contact-details.html',
      controller: 'ContactsDetailCtrl'
    })
    .when('/contacts/edit/id', {
      templateUrl: 'partials/add-contacts.html',
      controller: 'ContactsEditCtrl'
    })
    .otherwise('/contacts/list');
});