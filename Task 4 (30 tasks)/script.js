//1.
var a = 43 % 10; //3
//2.
var b = 1==true; //true
var c = 1===true; // false - ponieważ typ danych jest różny
//3.
var cat = "Garfield";
//4.
var year = 2000;
//5.
var wet = false;
//6.
var d = "||, &&, !;";
//7.
console.log("------7-------");
for(var i = 0; i < 5; i++){
    console.log(i);
}
//8.
console.log("------8-------");
var e = 0;
while(e < 3){
    console.log(e);
    e++;
}
//9.
var f = 5;
if(f % 2 == 0){
    var parzyste = true;
}
else{
    var parzyste = false;
}
//10.
var g = 6;
(g % 2 == 0)? parzyste = true : parzyste = false;
//11.
//break
//12.
console.log("------12-------");
var number = 1;
switch(number){
    case 0:
        console.log("zmienna number = 0");
        break;
    case 1:
        console.log("zmienna number = 1");
        break;
}
//13.
var h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//14.
var count = 0;
for(var i = 0; i < h.length; i++){
    if(h[i] % 2 !== 0){
        count++
    }
}
//15.
for(var i = 0; i < h.length; i++){
    h[i] *= 2;
}
//16.
h.push(10);
//17.
h.unshift(-1);
//18.
h.pop();
//19.
h.shift();
//20.
var i = h.slice(0, h.length/2);
//21.
var j = Math.round(39.793245*100)/100;
//22.
function getSum(total, elem) {
        return total + elem;
    }

    //summing all element (except there is no elements)
    if (h.length == 0) {
        var k = 0
    } else {
        var k = h.reduce(getSum);
    }
//23.
var l = Math.ceil(Math.random() * 100);
//24.
var m = Math.pow(Math.random() * 100, 2);
//25.
var names = [{name: 'Mark'}, {name: 'John'}, {name: 'James'}, {name: 'Dan'}, {name: 'Ash'}];
var letters = ['m','d','a'];

var newNames = [];

for(var i = 0; i < names.length ; i++){
    for(var j = 0; j < letters.length; j++){
        if(names[i].name.charAt(0) == letters[j].toLocaleUpperCase()){
            newNames.push(names[i]);
            names.splice(i, 1);
        }
    }
}
//26.
var fruits = [{fruit: "apple", fresh: true, count: 5}, {fruit: "banana", fresh: true, count: 3}, {fruit: "orange", fresh:
false, count: 2}, {fruit: "mango", fresh: true, count: 7}]

var freshFruits = [];
var obj = new Object();
for(var i = 0; i < fruits.length; i++){
    if(fruits[i].fresh = true){
        obj
        
        //freshFruits.prototype.push.call(fruits[i].fruit, "fruits[i].count")
    }
}
//27.
function n(ar, num){
    var counter = 0;
    for(var i = 0; i < h.length; i++){
        if(h[i] == num){
            counter ++;
        }
        return counter;
    } 
}

n(h, l);


