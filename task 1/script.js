var numbers = [];



function solution(arrayName, howManyElements) {

    //generating array elements
    for (var i = 0; i < howManyElements; i++) {
        arrayName[i] = Math.floor(Math.random() * 100);
    }
    console.log(arrayName);

    //sorting array increasingly
    arrayName.sort(function (a, b) {
        return a - b
    });
    console.log(arrayName);

    //sliceing array in a half
    arrayName.splice(arrayName.length / 2, arrayName.length / 2)
    // alternative: arrayName = arrayName.slice(0, arrayName.length/2)
    console.log(arrayName);

    //filter of even numbers (neded in next step)
    function evenFilter(number) {
        return number % 2 == 0
    }

    //filtering even numbers
    arrayName = arrayName.filter(evenFilter);
    console.log(arrayName);

    //sum engine
    function getSum(total, elem) {
        return total + elem;
    }

    //summing all element (except there is no elements)
    if (arrayName.length == 0) {
        var sum = 0
    } else {
        var sum = arrayName.reduce(getSum);
    }

    //returns solution
    return sum;
}
