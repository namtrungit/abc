var Nv = /** @class */ (function () {
    //1
    function Nv(name) {
        this.name = name; //name bị lỗi do bị đang dùng es5
        console.log(this.name + "contructor.");
    }
    //2
    Nv.talk = function () {
        console.log('Chào bạn');
    };
    //3
    Nv.prototype.run = function () {
        console.log("This is running");
    };
    return Nv;
}());
;
var nv = new Nv('Trung');
Nv.talk();
nv.run();
//# sourceMappingURL=lesson18Class2.js.map