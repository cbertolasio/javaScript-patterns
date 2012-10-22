/*globals $,alert*/

MYAPP.namespace("MYAPP.Samples.Knockout");

MYAPP.Samples.Knockout = (function () {
    // initialize any dependencies, private properties, private methods, etc. in your var setup
    var _name = { firstName: ko.observable("Joe"), lastName: ko.observable("Bloggs")},
        _address = { address1: ko.observable("1900 Grant St"), city: ko.observable("Denver"), state: ko.observable("CO") },
        computeFullName = function () { return _name.firstName() + " " + _name.lastName(); },
        viewModel = {
            name: _name,
            address: _address,
            fullName: computeFullName
        },
        documentReady = function () {
            ko.applyBindings(viewModel);
        };


    // return the public api...
    return {
        ready : documentReady
    };
} ());


$(document).ready(function () {
    var koModule = MYAPP.Samples.Knockout;
    koModule.ready();
});





