let num =200

if(num%10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//2
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} years old.`);

//3
let quarter = 3;
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Error");
        break;
}


//4
let aname = "Apple";

if( (aname.length >=5) && (aname[0] == "a" || aname[0] == "A")){
    console.log('it is golden');
}
else {
    console.log('it is not golden');
}

//5

let a = 0.3;
let b = 0.1;
let c = 0.0;
 
if (a > b){
    if (a > c ){
        console.log(a,"is largest");
    }
    else {
        console.log(c,"is largest");
    }
    
}
else{
    if (b > c ){
        console.log(b,"is largest");
    }
    else {
        console.log(c,"is largest");
    }
}

//6
let num1 =24;
let num2 = 31;

if ( (num1%2) == (num2%10) ){
    console.log("has the same last digit number which is ", num1%10);

}
else{
    console.log("has different last digit number");
}

//upp
str = "Subin";
up = str.toUpperCase();
low = str.toLowerCase();

console.log(up);
console.log(low);
