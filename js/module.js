/*globals $,alert*/

BDS.namespace("BDS.Utilities");

BDS.Utilities = (function () {
    // initialize any dependencies, private properties, private methods, etc. in your var setup
    var _name = { firstName: "joe", lastName: "bloggs" },
        _address = { address1: "1900 grant st", city: "denver", state: "co" },
        computeFullName = function () { return _name.firstName + " " + _name.lastName; };

    // return the public api...
    return {
        sayHello: function () { return "hello world"; },
        getDate: function () { return new Date(); },
        getFullName: computeFullName(),
        person: {
            fullName: computeFullName(),
            firstName: _name.firstName,
            lastName: _name.lastName,
            address: {
                address1: _address.address1,
                city: _address.city,
                state: _address.state
            }
        }
    };
} ());


$(document).ready(function () {
    var utils = BDS.Utilities;

    var $console = $("#console-out");
    $console.append("<p>" + utils.sayHello() + "</p>");
    $console.append("<p>" + utils.getDate() + "</p>");
    $console.append("<p>" + utils.person.firstName + "</p>");
    $console.append("<p>" + utils.person.fullName + "</p>");
    $console.append("<p>" + utils.person.address.address1 + "</p>");
    $console.append("<p>" + utils.person.address.city + "</p>");
    $console.append("<p>" + utils.person.address.state + "</p>");

});





