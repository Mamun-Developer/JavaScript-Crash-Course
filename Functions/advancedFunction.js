/***
 * ...Hello...
 * Create a fucntion that will:
 * 1. Receive a string
 * 2. Reverse the string
 * 3. pad the whole string with "..."
 * 4. pass the string in another funtion named> callback which will be provided by the user
 * 
 * The call back fucntion can do anything with the string
 */


function strProcessor(strValue,callBack) {
    //Do string processing
    // let reversed = ""
    // // Hello > 0:H, 1:e, 2:l, 3:l, 4:o

    // for (let i = strValue.length - 1; i >= 0; i--) {
    //     reversed = reversed + strValue[i];
    // }
    // console.log(reversed)

    //Convert the string into array of char
    //Reverse the array (array has a method to reverse the array)
    //JOin the array so that it becomes a string
    //Now the string is reversed

    let arChar = strValue.split("")
    arChar.reverse()  //in place modification
    let reversed = arChar.join("")
    
    //pass the result to callback function
    callBack(reversed)

}
function callBackFunc(strValue) {
    //Do anything with the data
    
}

strProcessor("ABCDEF", callBackFunc)