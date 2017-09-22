/*Dana tablica: [{name: 'Mark'}, {name: 'John'}, {name: 'James'}, {name: 'Dan'}, {name: 'Ash'}];
Przefiltruj ją z wszystkich elementów, których pierwsza litera klucza 'name', jest zawarta
w tablicy: ['m','d','a'];*/


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

console.log(names);
console.log(newNames);

