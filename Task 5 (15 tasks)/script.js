//1.
false // ponieważ wyrażenie typeof 1 zwróci "number" a ten nie będzie już równy 1. true zwróci wyrażenie takie jak: 
typeof 1 === typeof 150; // "number" === "number"
//2.
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = arr1.concat(arr2);
//3. odpowiedź to: rekurencja;
//a tak serio ot pewnie chodziło o zadanie nr2:
let arr4 = [...arr1, ...arr2];
//4. 
let a = 'javascript';
let b = a.substr(-6, 6);
//5.
let arr5 = [7, 0, "", false, "words", undefined, null, [], {}];
let arr6 = arr5.filter( (v) => {if (v != 0) {return v;}});

let arr7 =[];
arr5.filter( (v, i) => {if (v != 0) {arr7.push(arr5[i]);}})

//niby funkcja taka sama ale wyniki inne. Rozumiem skąd to się bierze (na 95%), ale nie wiem które rozwiązanie jest prawidłowe. Stawiam na tablicę arr6;

//6.

function animals(animal){
    return function(sound){
        console.log(animal + " says " + sound)
    }
}

//7.
const names = ['Adam', 'Mark', 'James'];
const eyes = ['Green', 'Blue', 'Bronze'];
const age = [30, 20, 25];
let solution1 = [];
for(var i = 0; i < names.length; i++){
    solution1.push({name: names[i], eye: eyes[i], age: age[i]});
}
//8.
let person = { name: 'Bryan', surname: 'Black', age: 40 }
console.log("klucze obiektu person: " + Object.keys(person));
//9.
console.log("wartości obiektu person: " + Object.values(person));
//10.
let arr8 = [{ sky: 'blue' }, { pillow: 'white' }, { grass: 'green' }];
let solution2;
arr8.filter((v, i) => {
    if(v.pillow == "white"){
        solution2 = true;
    }
})
solution2 != true ? solution2 = false : 0;
//11.
let arr9 = [{ day: 5 }, { day: 7 }, { day: 10 }];
let solution3 = [];
arr9.map( (v) => solution3.push(v.day))
console.log(solution3);
//12.
const data = {
 first: [3.57, 2.43, 43.4],
 second: [7.26, 1.43, 25.2],
 third: [7.6165, 3.0, 6.42],
};
let newObj = {};
for(var i = 0; i < Object.keys(data).length; i++){
    newObj[Object.keys(data)[i]] = data[Object.keys(data)[i]].reduce((s, a) => Math.floor(s) * Math.floor(a));
}
//jestem dumny z tej pętli ^^, ale podejrzewam, że i tak można cos tu skrócić, ale słabo znam działania na obiektach. 

//13.
let obj = [{ key1: 'value1' }, { key2: 'value2' }, { key3: 'value3' }, { key4: 'value4' }];

let keys = [];
for(var i = 0; i < obj.length; i++){
    keys = keys.concat(Object.keys(obj[i]));
}

//14.
function random(string) {
    let newString = '';
    for(var i = 0; i < string.length; i++){
        let upperOrLower = Math.floor(Math.random()*2);
        if(upperOrLower == 0){
            newString += string[i].toUpperCase();
        }
        else{
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}
//15.
let arr10 = [ 'cat', 'dog', 'bird', 'cat', 'tortoise', 'camel', 'bird', 'horse', 'duck', 'dog'];

let arr11 = arr10.filter((v, i) => arr10.indexOf(v) == i);
//powyższe działa

//let arr11 = arr10.filter((v, i) => {
//    arr10.indexOf(v) == i
//});
//to jest takie samo jak powyższe i nie działa. Dlaczego?

 