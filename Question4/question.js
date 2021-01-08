var Sum = function(x) { return function(i) {     return function(y) { return x + y+i; }; } };

 var s=Sum(1)(2)(3); 

console.log(s)