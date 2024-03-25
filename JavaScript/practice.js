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



//slice 
let colors = ["red", "green", "blue", "orange", "yellow"];

console.log(colors.splice(3));
console.log(colors);
console.log(colors.splice(0,2,"purplw", "black"));
console.log(colors);



//sort 
colors.sort();

console.log(colors);


let months = ["january","july","march","august"]

console.log(months.splice(0,2,"july","june"))
console.log(months)

//2
let lang = ['c', 'c++','html','javascript','python','java','c#','sql']
reverse = lang.reverse().indexOf("javascript")
console.log(reverse);


//tic tac toe

let tictac = [['X','null','O'],['null','X','null'],['O','null','X']]

console.log(tictac);
console.log(
tictac[0][1] = '0'

);

//q1
let numb = [7,9,0,-2]
let n = 3;
console.log(numb.splice(0,n));

//q2
let numw = [7,9,0,-2];
let u = 3;
let ans = numw.slice(numw.length-u);
console.log(ans);

//q3
// let value = prompt("Enter name ");

// if(value.length == 0){
//     console.log("empty string");
// }
// else{
//     console.log("STRING IS NOT EMPTY");
// }

// 4
// let character = prompt("enter character");
// if(character == character.toLowerCase()){
//     console.log("lower case");
// }
// else{
//     console.log("not lower case");
// }

//5
// let names = prompt("Enter name");
// console.log(names);
// console.log(names.trim());


//6
let arr = ["Subin", "Rai", 12, 3, 5 , 6];
let ser= 132;

if(arr.indexOf(ser) != -1){
    console.log("elements exist");

}

else{
    console.log("elements not exist");
}


//loop
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// //to print odd 
// for(let i=1; i<=15; i= i+2){
//     console.log(i);
// }

let t = prompt("Enter table number");
t = parseInt(t);
for( i=t; i<= t*10; i= i+t){
    console.log(i);
}
