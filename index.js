const message = "my name is imran";
console.log(message);
// another one
const another = new String('imranm');
let message2 = ('imran'); 
// const myName = prompt ('Can I know your name');
// alert(`hello, ${myName}! I hope you are good `);

// if and else if comment ( Reserved Keywords)

let hour = 17; hour = 12;
if (hour >=6 && hour < 12)
    console.log(   'Good Morning');
else if (hour >=12 && hour < 18){
    console.log('Good after noon');
}
else{
    console.log('Good Evening');
    alert('You are not in the world');


}
    

    // objects examples

let person = {
    name : 'imran',
    age : 45
}
person['age'] = 12;
console.log(person.name);
console.log(person.age);

// Array examples

let colorSelected = ['red', 44, 'blue'];
colorSelected[4] = 'inv';
colorSelected[3] = 'invd';
console.log(colorSelected);
console.log(colorSelected.length);

//  Functions myFunction()

function greet(name, nameSake, book){
    console.log('hello ' + name + ' ' + nameSake);
}
greet('imran', 'hud');
greet('imrannn', 'Sufyan');


//   calculating a value
function square(number){
    return number * number;
}

console.log(square(21));
// Or
// let number = square(4);
// console.log(number)

function heyGuy() {
    for (var i = 0; i < 5; ii){
        console.log(i)

    }
        
}  
heyGuy();



// const question = [
//     {
//         question : " what is my name",
//         answer : [
//             {text: 'biochemistry', correct: false},
//             {text: 'biology', correct: false},
//             {text: 'physucs', correct: false},
//             {text: 'medical', correct: false},
//         ]
//     }
// ];
// function startQuiz(){

// };
// const bbbbb = document.getElementById('im')