var styles = ["Джаз", "Блюз"];

styles.push("Рок-н-Ролл");

console.log(styles);

styles.splice(-2,1,"Класика");

console.log(styles);

console.log(styles.shift());

styles.unshift("Реп", "Реггі");

console.log(styles);


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
