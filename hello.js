/*const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Minkus");
sayHello("Cory");
sayHello("Topanga");*/

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole('Lizzie');

const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('Miranda');

console.log(greeting);