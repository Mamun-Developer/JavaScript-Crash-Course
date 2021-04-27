// Create an array using object
// Your array must support push(), pop(), update()


//Algorithm
/*
    1. Create an Object
    2. create push()
    3. create pop()
*/

let arr = {
    "lastIndex":-1,
    "push":function(value){
        this["lastIndex"] = this["lastIndex"] + 1;
        this[this["lastIndex"]] = value;
    },
    "pop":function(){
        if(this["lastIndex"]>-1){
            delete this[this["lastIndex"]]
            this["lastIndex"] = this["lastIndex"]-1
        }
    }
}




console.log(arr)
arr.pop()

arr.push("data4")
arr.push("data4")
arr.pop()

console.log(arr)