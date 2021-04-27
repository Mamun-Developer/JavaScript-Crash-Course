const DATA = 1
function adder(num1,num2){
    let res = num1 + num2;
    return res;
}


function arrayAdded(arr){
    let res = 0;
    for(let data of arr){
        res = res + data;
    }
    return res;
}

function arrayAdded2(p1,p2,...data){ //rest in param
    console.log(data);
}
// let ar = [1,2,3,4,5,6,7,8]
// arrayAdded2(...ar);  //spreading in argument


// console.log(arrayAdded([1,2,3,4]))


// console.log(adder(2,3))


// function func(a){
//     return a*2;
// }

let func = function(a){
    return a*2;
}
let ll = func;
let l2 = ll;
l2(122);
ll(13);

func(12) //returns 24

function fff(f1,v1){
    let res = f1(v1);
    return res
}
fff(func,12);

console.log(func(321))
