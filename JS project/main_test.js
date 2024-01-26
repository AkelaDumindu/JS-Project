

//********function******** */
// function printData(name = 'Akela'){ //parameter  default valuje is Akela
//     console.log('Hello: '+name);

// }

// printData('Dumi'); //Dumi = Arguement
// printData('Thilakshana');
// printData();


// // **********function Expression***

// const sum = function(num1, num2){
//     console.log(num1 + num2);
// }

// sum(10,20);


// // Arrow Function********

// const sum1 = (num1,num2)=> num1 + num2;

// console.log(sum1(10, 30));


// **********Call back Function

// let serverData;

// function getData(printData){

//     setTimeout(()=>{
//         serverData={

//             name:'Akela',
//             city:'Galle',
//             mobile:'07745224554',
           
    
//         }
//         printData();
//     }, 3000);


   
// }

// function printData(){
//     console.log(serverData);
// }

// console.log("Start");
// getData(printData);
// console.log("end");



let myBurger = 'i want to eat spicy burger';

function readyForOrder(eat){
    console.log('order');

    setTimeout(()=>{
        myBurger = 'Spicy Chicken burger';
        eat();

    }, 3000);
    

}


function eat(){
    console.log(myBurger);
}


console.log('call for order');
readyForOrder(eat);

console.log('play !');




