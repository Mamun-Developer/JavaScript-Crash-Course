let firstArr = [];
firstArr[0] = "uzzal";
firstArr[0] = "uzzal2";
firstArr[1] = "mamun";
console.log(firstArr);
let str = "something"
let secondArr = ["uzzal","mamun","shofi","Alex","Koipa"];
for (let data in secondArr){
    console.log(secondArr[data]);
}

for (let data of secondArr){
    console.log(data);
}
function removeIndex(arrayName,targetIndex){
    /**
     * 1. Receive array
     * 2. Receive array index which will be removed
     * 3. Lets consider this array = ["a","b","c","d"]
     * 4. We have to remove index num = 1 or value "b"
     * Algorithm is written below
     * 1. Create an empty array
     * 2. Iterate over all index of received array
     * 3. Add value of each index to the new array while iterating
     * 4. When we found that iteration idex == removeableIndex then dont add this value to the new array
     * 5. Complete the iteration
     * 6. Return the newly created array
     */
    let modifiedArray = [];
    for (let index in arrayName){
        if(index!=targetIndex){
            modifiedArray.push(arrayName[index]);
        }
    }
    return modifiedArray;
}

let newArray = removeIndex(secondArr,2);

console.log(newArray.sort());


let ar = ["mamun","hridoy",["he","she"]];
console.log(ar);