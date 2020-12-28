"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _age;
var User = (function () {
    function User(name, age, dob) {
        _age.set(this, 10);
        this.height = 171.9;
        this.name = name;
        __classPrivateFieldSet(this, _age, age);
        this.dob = dob;
    }
    Object.defineProperty(User.prototype, "name", {
        set: function (newName) {
            if (!newName) {
                throw new Error('newName is blank');
            }
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.work = function () {
        console.log(this.name + ' is working');
    };
    User.prototype.eat = function () {
        console.log(__classPrivateFieldGet(this, _age));
    };
    return User;
}());
_age = new WeakMap();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log(_this.height);
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log(this.name + ' is working hard');
    };
    return Employee;
}(User));
var u1 = new User('Pariwesh Gupta', 12);
u1.work();
var e1 = new Employee('John', 34);
console.log(e1.name);
e1.work();
e1.
;
function add(x, y, v) {
    if (y === void 0) { y = 10; }
    var restParam = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        restParam[_i - 3] = arguments[_i];
    }
    var result = restParam.reduce(function (sum, value) { return sum + value; });
    console.log(result);
    return x + y + v + result;
}
var str = 1;
str = 'John';
var a = 1;
a = 'John';
var isDone;
console.log(isDone);
var big;
var color1 = 'red';
console.log("Ram likes " + color1 + " color.");
var list = [1, 2, 3];
var x;
x = ['hello', 10];
console.log(x[0]);
console.log(x[1]);
x[2] = true;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
