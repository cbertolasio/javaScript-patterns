/*globals $,alert*/

BDS.namespace("BDS.Utilities2");

BDS.Utilities2 = (function () {
    // initialize any dependencies, private properties, private methods, etc. in your var setup
    var _sayHello = function () { return "hello world"; },
        _getDate = function () { return new Date(); },
        _name = { firstName: "joe", lastName: "bloggs" },
        _address = { address1: "1900 grant st", city: "denver", state: "co" },
        _computeFullName = function () { return _name.firstName + " " + _name.lastName; },
        _person = {
            fullName: _computeFullName(),
            firstName: _name.firstName,
            lastName: _name.lastName,
            address: {
                address1: _address.address1,
                city: _address.city,
                state: _address.state
            }
        };

    // return the public api...
    return {
        sayHello: _sayHello,
        getDate: _getDate,
        getFullName: _computeFullName,
        person: _person
    };

} ());


$(document).ready(function () {
    var utils = BDS.Utilities2;

    var $console = $("#console-out");
    $console.append("<p>" + utils.sayHello() + "</p>");
    $console.append("<p>" + utils.getDate() + "</p>");
    $console.append("<p>" + utils.person.firstName + "</p>");
    $console.append("<p>" + utils.person.fullName + "</p>");
    $console.append("<p>" + utils.person.address.address1 + "</p>");
    $console.append("<p>" + utils.person.address.city + "</p>");
    $console.append("<p>" + utils.person.address.state + "</p>");

});





