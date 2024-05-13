// let btn = document.querySelector('button');


// btn.addEventListener('click', function () {
//     let h3 = document.querySelector('h3');
//     let randomColor = generateRandomColor();
//     h3.innerText = randomColor;
//     console.log("color updated");

//     let div =  document.querySelector('div');
//     div.style.backgroundColor = randomColor;

// });


// let btn1  = document.querySelector('#btn');
// btn1.addEventListener('click', function () {
//     let randomColor = generateRandomColor();
//     btn1.style.backgroundColor = randomColor;
// });
// function generateRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

function saveToData(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floot(Math.random() * 10)+1;
        if (internetSpeed > 4){
            resolve('sucess data is saved ');
        }
        else{
            reject('data is not saved');
        }
    })
}
saveToData('SUBINRAI').then(()=> {
    console.log('data is saved');
})
.catch(()=>{
    console.log('rejected');
})