function camelize(str) {
    var words = str.split("-");
    
    for (var i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join("");
}

var str = "my-short-string";
console.log(camelize(str));