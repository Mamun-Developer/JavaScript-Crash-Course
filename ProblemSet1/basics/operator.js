function add(a,b){
    return a+b;
}

function pow(value,p){
    return value ** p;
}

function powPlus(value,p,q){
    return value ** p + q;
}

function noRet(a){
    //a
}


function stringPlus(str1,str2){
    return str1 +"\n"+ str2;
}

function opPresidence(){
    let res = (2*(2+1))-5*3/2;
    return res;
}

console.log(opPresidence());
console.log(stringPlus("Uzzal","Kumar"));
console.log(pow(2,3,2));
console.log(add(8,2));
console.log(noRet(234));