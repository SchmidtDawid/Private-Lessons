var numbers = [];

function solution(arrayName, howManyElements) {

    for (var i = 0; i < howManyElements; i++) {
        arrayName[i] = Math.floor(Math.random() * 11);
    }
    console.log(arrayName);
    
    arrayName.sort(function (a, b) {
        return b - a
    });
    console.log(arrayName);
    
    return arrayName[0]*arrayName[1]*arrayName[3];
}