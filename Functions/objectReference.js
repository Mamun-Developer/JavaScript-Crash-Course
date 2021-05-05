//Changes main array
function arUpdateIndex(arr,index,value){  //123
    arr[index] = value;
    return arr;
}
function f1(n){
    return n*2;
}

//Doesnt changes main array
function arUpdateIndex2(arr,index,value){  //123
    //let temp = arr.slice()
    //let temp = [...arr];
    let temp = arr.map(f1)
    temp[index] = value;
    return temp;
}

let data = [1,2,3,54];  //123
// console.log(arUpdateIndex(data,0,33));
// console.log(data)

// let d = [1,2];  //d>123, 1>222, 2>444
// let c = d;  //c>123, 1>222, 2>444
// c[0] = 4   //c>123, 4>4312, 2>53443
// c = "" // c>332
// console.log(d)

let res = arUpdateIndex2(data,0,33);
console.log(res)
console.log(data)



