// firebase linked / connected
var config = {
    apiKey: "AIzaSyDqXpnqzFN6v0b7T5KQI9JrA_SfmeKld5U",
    authDomain: "gus-employee-manage.firebaseapp.com",
    databaseURL: "https://gus-employee-manage.firebaseio.com",
    projectId: "gus-employee-manage",
    storageBucket: "",
    messagingSenderId: "105283063159"
};
firebase.initializeApp(config);
// initializing variables
var database = firebase.database();
var name = "";
var role = "";
var start = "";
var rate = "";
// calculated data, not stored in firebase
var months = "";
var totalBilled = "";
// on submit button click event
$('#submit-employee').on('click', function (event) {
    event.preventDefault();
    name = $('#employee-name').val().trim();
    role = $('#employee-role').val().trim();
    start = $('#employee-start').val().trim();
    rate = $('#employee-rate').val().trim();
    rate = parseInt(rate);
    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    // resets the input fields to empty
    $('#employee-name').val('');
    $('#employee-role').val('');
    $('#employee-start').val('');
    $('#employee-rate').val('');
});
database.ref().on('child_added', function (childSnapshot) {
    $('tbody').append('<tr>'
        + '<td>' + name + '</td>'
        + '<td>' + role + '</td>'
        + '<td>' + start + '</td>'
        + '<td>' + rate + '</td>'
        + '</tr>');
});