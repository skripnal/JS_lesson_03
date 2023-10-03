var styles = ["Джаз", "Блюз", "Рок-н-Ролл", "Класика", "Реп", "Реггі"];


function find (arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

var i = find(styles, "Класика");
console.log(i);