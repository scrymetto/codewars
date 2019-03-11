// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function (prototype, properties) {
    console.log(properties);
    if (!prototype && prototype !== null || !prototype instanceof Object) {
        throw new TypeError()
    }
    let newObj = {};
    newObj.__proto__ = prototype;

    if (properties !== undefined) {

        Object.defineProperties(newObj, properties)
    }
    return newObj
};


let citizen = {
    sleep: function () {
        return "zzZ...";
    },
    panic: function () {
        return "AaAaAaAa!";
    }
};

let veteran = Object.create(citizen, {
    panic: {
        value: function () {
            return "SNAFU";
        }
    }
});
console.log(veteran.sleep());
console.log(veteran.panic());
