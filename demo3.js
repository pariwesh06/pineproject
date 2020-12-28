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
var com;
(function (com) {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.walk = function () {
            console.log('walking');
        };
        return Animal;
    }());
    com.Animal = Animal;
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.eat = function () {
        };
        return Dog;
    }(Animal));
    com.Dog = Dog;
    var BankAccount = (function () {
        function BankAccount() {
            this.balance = 0;
        }
        BankAccount.prototype.withdraw = function (amount) {
            return 1;
        };
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        return BankAccount;
    }());
    var account = new BankAccount();
    console.log(account.getBalance());
})(com || (com = {}));
