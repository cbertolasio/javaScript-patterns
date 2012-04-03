/*globals $,alert*/

var utils = BDS.namespace("BDS.Utilities");

// attach a function
utils.sayHello = function () {
    return "hello world";
};

// attach a function
utils.getDate = function () {
    return new Date();
};

// attach a property
utils.name = {
    firstName: "joe",
    lastName: "bloggs"
};

// attach a property
utils.address = {
    address1 : "1900 grant st",
    city : "denver",
    state : "co"
};

// attach a property
utils.person = {
    name: utils.name.firstName + " " + utils.name.lastName,
    address: utils.address.address1 + ", " + utils.address.city + " " + utils.address.state
};


$(document).ready(function () {
    var $console = $("#console-out");
    $console.append("<p>" + utils.sayHello() + "</p>");
    $console.append("<p>" + utils.getDate() + "</p>");
    $console.append("<p>" + utils.name.firstName + "</p>");
    $console.append("<p>" + utils.address.address1 + "</p>");
    $console.append("<p>" + utils.person.name + "</p>");
    $console.append("<p>" + utils.person.address + "</p>");

});





