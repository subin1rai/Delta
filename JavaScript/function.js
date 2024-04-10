// //

// let request = "odd";
//  function getOddorEven(request) {
//     if(request == "odd"){
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//             return odd();
//           };
//     }
//   else if(request == "even"){
//     let even = function (n) {
//         console.log(n % 2 == 0);
//         return even();
//       };
//   }
//   else {
//   console.log("wrong request");
// }

let num = [1,2,3,4,5]

//map
let set = num.map((nums)=>{
  return nums * 2;
});
console.log(set)
//filter
let ans = num.filter((ar) => {
  return ar % 2 == 0;
});
//reduce
let red = num.reduce((res,al) =>res+al);
console.log(red);


//max from reduce
//normal
let max = -1;

for (let i = 0; i<num.length; i++){
  if(num[i] > max){
    max = num[i];
  }
}

console.log(max);

//FROM reduc
let maxa = num.reduce((max,el)=>{
  if(max <el){
    return el;
  }
  else{
    return max;
  }
});
console.log(maxa);


//spread

let arr = [1, 2,3,4,5];
let newArr = [...arr];

console.log(newArr);
let name = [..."Subin"]

console.log(name);

let odd = [1, 3, 5, 7];
let even = [0, 2,4,6,8];

let nums = [...odd, ...even];

console.log(nums);


//spread with object literals

let data ={
  email : "subinbantawa@gmail.com",
  password : "abc",

} 
let newdata = {...data, id: 123 ,names : "subin"}

console.log(newdata);
  
let me = {..."subin"};

console.log(me);

function sum(...args){
  return args.reduce((sum,el)=> sum + el);

}

// function mins(a,b,c){
//   console.log(arguments);
// }

function min(...args){
  return args.reduce((min,el)=>{
    if(min > el){
      return el;
    }
    else{
      return min;
    }
  })
}

//destructuring

let neames = ["Subin","Rabin","tony","sujal","ayush"]
let [winner,runnerup,...others] = neames;
console.log(neames);
console.log(winner);
console.log(runnerup);
console.log(winner,runnerup);
console.log(others);


const student = {
    name : "Karan",
    age : "17",
    city : "Bangalore",
    subjeect: ["nepali", "english", "math"],
    username: "Karan@1",
    password: "Karan@123"
  
};
// let username = student.username;
// let password= student.password;

let{username, password} = student;


//q1
nums = [1,2,3,4,5];

const square = nums.map((nums)=> nums*nums);
console.log(square);

const plus = square.reduce((ace,cc)=> ace + cc );
console.log(plus);

let avg = plus/nums.length;
console.log(avg);

//uppercase

up = ["subin","smriti"];

const upcase =  up.map((strings)=> strings.toUpperCase());
console.log(upcase);