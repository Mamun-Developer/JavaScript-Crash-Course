/*
Write a program that checks the contents of a integer variable containing a
number between 0 and 9. Print the number as a word corresponding to the
number in the variable. For this exercise, the number in the variable can be
hardcoded; no interaction is required. Run the application a few times to test
it, but remember to change the number in the variable before you recompile or
interpret.
Input
0
5
Output
Zero
Five
*/

let nums = {
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine"
}
let check = 0;
console.log(nums[0])