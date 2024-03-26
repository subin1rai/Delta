//  let num =200
//  if(num%10 == 0){
//      console.log("Good");
//  }
//  else{
//      console.log("Bad");
//  }
//  //2
//  // let name = prompt("Enter your name:");
//  // let age = prompt("Enter your age:");
//  // alert(`${name} is ${age} years old.`);
//  //3
//  let quarter = 3;
//  switch(quarter){
//      case 1:
//          console.log("January, February, March");
//          break;
//      case 2:
//          console.log("April, May, June");
//          break;
//      case 3:
//          console.log("July, August, September");
//          break;
//      case 4:
//          console.log("October, November, December");
//          break;
//      default:
//          console.log("Error");
//          break;
//  }
//  //4
//  let aname = "Apple";
//  if( (aname.length >=5) && (aname[0] == "a" || aname[0] == "A")){
//      console.log('it is golden');
//  }
//  else {
//      console.log('it is not golden');
//  }
//  //5
//  let a = 0.3;
//  let b = 0.1;
//  let c = 0.0;
//  if (a > b){
//      if (a > c ){
//          console.log(a,"is largest");
//      }
//      else {
//          console.log(c,"is largest");
//      }  
//  }
//  else{
//      if (b > c ){
//          console.log(b,"is largest");
//      }
//      else {
//          console.log(c,"is largest");
//      }
//  }
//  //6
//  let num1 =24;
//  let num2 = 31;
//  if ( (num1%2) == (num2%10) ){
//      console.log("has the same last digit number which is ", num1%10);
//  }
//  else{
//      console.log("has different last digit number");
//  }
//  //upp
//  str = "Subin";
//  up = str.toUpperCase();
//  low = str.toLowerCase();
//  console.log(up);
//  console.log(low);
//  //slice 
//  let colors = ["red", "green", "blue", "orange", "yellow"];
//  console.log(colors.splice(3));
//  console.log(colors);
//  console.log(colors.splice(0,2,"purplw", "black"));
//  console.log(colors);
//  //sort 
//  colors.sort();
//  console.log(colors);
//  let months = ["january","july","march","august"]
//  console.log(months.splice(0,2,"july","june"))
//  console.log(months)
//  //2
//  let lang = ['c', 'c++','html','javascript','python','java','c#','sql']
//  reverse = lang.reverse().indexOf("javascript")
//  console.log(reverse);
//  //tic tac toe
//  let tictac = [['X','null','O'],['null','X','null'],['O','null','X']]
//  console.log(tictac);
//  console.log(
//  tictac[0][1] = '0'
//  );
//  //q1
//  let numb = [7,9,0,-2]
//  let n = 3;
//  console.log(numb.splice(0,n));
//  //q2
//  let numw = [7,9,0,-2];
//  let u = 3;
//  let ans = numw.slice(numw.length-u);
//  console.log(ans);
//  //q3
//  // let value = prompt("Enter name ");
//  // if(value.length == 0){
//  //     console.log("empty string");
//  // }
//  // else{
//  //     console.log("STRING IS NOT EMPTY");
//  // }
//  // 4
//  // let character = prompt("enter character");
//  // if(character == character.toLowerCase()){
//  //     console.log("lower case");
//  // }
//  // else{
//  //     console.log("not lower case");
//  // }
//  //5
//  // let names = prompt("Enter name");
//  // console.log(names);
//  // console.log(names.trim());
//  //6
//  let arr = ["Subin", "Rai", 12, 3, 5 , 6];
//  let ser= 132;
//  if(arr.indexOf(ser) != -1){
//      console.log("elements exist");
//  }
//  else{
//      console.log("elements not exist");
//  }
//  //loop
//  // for(let i=1; i<=5; i++){
//  //     console.log(i);
//  // }
//  // //to print odd 
//  // for(let i=1; i<=15; i= i+2){
//  //     console.log(i);
//  // }
//  // let t = prompt("Enter table number");
//  // t = parseInt(t);
//  // for( i=t; i<= t*10; i= i+t){
//  //     console.log(i);
//  // }
//  // //nested loop
//  // for(let i=1 ; i<=5; i++){
//  //     for(let j=1; j<=3; j++){
//  //         console.log(j);
//  //     } 
//  // }
//  // while loop 
//  // let i = 1;
//  // while(i<=20){
//  //     console.log(i);
//  //     i++;
//  // }
//  //guess movie
//  let favorite = "Avatar"
//  let guess = prompt("Enter movie");
//  while ((guess != favorite) && (guess != "quit")){
//      console.log("wrong");
//      guess = prompt("Enter movie");
//  }
//  console.log("congrats");
// //loop with array
// let fruits = [["apple", "banana", "orange", "litchip"],["ok","bye"]];
//  for (let i =0; i <fruits.length; i++){
//      console.log(i,fruits[i]);
//  }
//  for(let i = fruits.length-1; i>=0; i--){
//      console.log(i,fruits[i]);
//  }
//  for(let i = 0; i<fruits.length; i++){
//      console.log(i,fruits[i]);
//      for(let j = 0; j < fruits[i].length; j++){
//          console.log(fruits[i][j]);
//      }
//  }
//  for(a of fruits){
//      for(names of a){
//      console.log(names);
//  }
//  }
// to do 
//  let todo = [];
//  let req = prompt("Please enter your request");
//  while(true){
//      if(req == "quit"){
//          console.log("quitting app");
//          break;
//          }
//       if(req == "list"){
//          console.log("------------------------------------");
//          for(let i = 0; i <todo.length; i++){
//              console.log(i,todo[i]);
//          }
//       console.log("------------------------------------");
//       }
//       else if(req == "add"){
//          let task = prompt("Please enter the task you want to add");
//          todo.push(task);
//       console.log("TASK ADDED");   
//       }
//       else if(req == "remove"){
//          let dlt = prompt("Please enter the task you want to remove");
//          todo.splice(dlt, 1);
//          console.log("TASK REMOVED");
//       console.log("------------------------------------");
//  }
//  req = prompt("Please enter your request");
//  };
// q1    
//  let arr = [1,2,3,4,5,6,2,3]
//  let num =2 
//  for(let i = 0; i<arr.length; i++ ){
//      console.log(arr[i]);
//     if(arr[i] == num){
//      arr.splice(i,1);
//     }
//  }
//  console.log(arr);