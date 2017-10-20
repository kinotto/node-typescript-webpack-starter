var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Homer = /** @class */ (function () {
    function Homer() {
    }
    Homer.prototype.name = function () {
        return 'Homer Simpson';
    };
    return Homer;
}());
var instance = new Homer();
console.log(instance.name());
var a = { b: 4, c: 6 };
var cc = __assign({}, a);
console.log(cc); //testing ES6 spread operator
//# sourceMappingURL=index.js.map