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
      controller: 'ContactAllCtrl'
    })
    .when('/contacts/add', {
      templateUrl: 'partials/add-contact.html',
      controller: 'ContactNewCtrl'
    })
    .when('/contacts/groups', {
      templateUrl: 'partials/all-groups.html',
      controller: 'ContactGroupsCtrl'
    })
    .when('/contacts/details/:id', {
      templateUrl: 'partials/contact-details.html',
      controller: 'ContactDetailCtrl'
    })
    .when('/contacts/edit/:id', {
      templateUrl: 'partials/add-contact.html',
      controller: 'ContactEditCtrl'
    })
    .otherwise('/contacts/list');
});