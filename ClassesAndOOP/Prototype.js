// let myName = "Prashant     ";
// console.log(myName.trueLength());


let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.prashant = function(){
    console.log(`Prashant is present in all objects`);
}

// heroPower.prashant();
myHeroes.prashant();

Array.prototype.heyPrashant = function(){
    console.log(`Prashant says Hello`);
}

myHeroes.heyPrashant();
// heroPower.heyPrashant();  It will reflect an error because a parent can never access its child's property

let anotherUserName = "ChaiAurCode    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"prashant  ".trueLength();
"iceTea    ".trueLength();