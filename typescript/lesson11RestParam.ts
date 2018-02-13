let displayColors = function (...colors: string[]) {
    console.log(arguments.length);
}
let message1 = "Hello";
displayColors(message1,'Red');
displayColors(message1,'Red', 'Green');
displayColors(message1,'Red', 'Green', 'Blue');