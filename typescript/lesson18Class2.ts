class Nv {
    //1
    constructor(name){
        this.name = name;//name bị lỗi do bị đang dùng es5
        console.log(this.name+ "contructor.")
    }
    //2
    static talk(){
        console.log('Chào bạn');
    }
    //3
    run(){
        console.log("This is running");
    }
};
let nv = new Nv('Trung');
Nv.talk();
nv.run();