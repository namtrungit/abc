var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Chào bạn');
    };
    return Person;
}());
//Class trong TS sẽ là 1 func khi dc biên dịch sang JS
//Class ko hỗ trợ hoisting như function
var p1 = new Person();
console.log(p1.run());
//# sourceMappingURL=lesson17Class.js.map