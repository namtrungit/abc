class Person{
    run(){
        console.log('Chào bạn');
    }
}
//Class trong TS sẽ là 1 func khi dc biên dịch sang JS
//Class ko hỗ trợ hoisting như function
let p1 = new Person();
console.log(p1.run());