function filterRange(array, a, b){
    var result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] >= a && array[i] <= b){
            result.push(array[i]);
        }
    }
    return result;
}

var arr = [11, 23, 12, 6, 2, 88, 100, 24, 124, 9634];

console.log(filterRange(arr, 15, 100));