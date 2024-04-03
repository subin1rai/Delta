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
