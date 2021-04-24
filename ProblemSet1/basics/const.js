const PI = 3.1416;  // 123456 > 3.1416
//PI = 674   // 234>674
function multPi(a){
    let res =  a * PI
    return res
}

const arr = ["uzzal","hridoy","shofi"];  // array loc > 123456 // uzzal loc > 543
arr[0] = "mamun";   //uzzal loc changed to > 345 but array loc > 123456; so no error
//arr = []
console.log(arr)
