
let a ="greend" 
if (a === "red"){
    console.log("Stop the vehicle");
}

if (a === "yellow"){
    console.log("ready to go ");
}
if (a === "green"){
    console.log("go ");
}
else{
    console.log("not green");
}


let size = "S"
if (size === "XL"){
    console.log("Price is rs 250");
}
else if (size === "L"){
console.log("Price is 200");
}
else if (size === "M"){
    console.log("Price is 100");
}
else{
    console.log("Price is 50");
}


//day printing statement

let day =3

switch (day) {
    case 1 :
        console.log("Sunday");
    break;
    case 2 :
        console.log("Monday");
        break;
    case 3 :
        console.log("Tuesday");
        break;
    case 4 :
        console.log("Wednesday");
        break;
    case 5 :
        console.log("Thursday");
        break;
    case 6 :
        console.log("Friday");
        break;
    case 7 :
        console.log("Saturday");
        break;
    default :
    console.log("Invalid day");   
    }