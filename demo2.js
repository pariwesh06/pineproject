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
var User = (function () {
    function User(name, age, dob) {
        _age.set(this, 10);
        this.height = 171.9;
        this.name = name;
        __classPrivateFieldSet(this, _age, age);
        this.dob = dob;
    }
    User.prototype.work = function () {
        console.log(this.name + ' is working');
        console.log(User.count);
    };
    User.getCount = function () {
        console.log(User.count);
        return User.count;
    };
    User.prototype.eat = function () {
        console.log(__classPrivateFieldGet(this, _age));
    };
    var _age;
    _age = new WeakMap();
    User.count = 10;
    return User;
}());
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
var e1 = new Employee('John', 34);
console.log(e1.name);
console.log(User.getCount());
