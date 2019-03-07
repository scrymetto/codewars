// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function (prototype, properties) {

    if (!prototype && prototype !== null || !prototype instanceof Object) {
        throw new TypeError()
    }
    let newObj = {};
    newObj.__proto__ = prototype;

    if (properties instanceof Object) {
        Object.defineProperties(newObj, properties)
    }
    return newObj
};


var citizen = {
    sleep: function () {
        return "zzZ...";
    },
    panic: function () {
        return "AaAaAaAa!";
    }
};

var veteran = Object.create(citizen, {
    panic: {
        value: function () {
            return "SNAFU";
        }
    }
});
//console.log(veteran instanceof citizen);
console.log(veteran.panic());

let veter = Object.create(citizen, {rpo: {'panic': 13}});
console.log(veter.rpo)