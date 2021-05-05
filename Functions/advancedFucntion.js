//normal function
function f(a,b){
    return a * b;
}
//function in variable
let f0 = function (a, b) {
    return a * b;
}

//arrow function with explicit return
let f1 = (a, b) => {
    return k * b;  //explicit return
}

//arrow function with implicit return (only possible if the function contains only one instruction)
let f2 = (a, b) => a*b //implicit return


console.log(f(2, 3))