// do{
//     var answer = prompt(` How can i help you, Please type only q to quit`);
//     if(answer != 'q') {
//         alert(` sorry, i couldn't understand ${answer} please do others`)
//     }
// }while (answer != 'q');


// do{
//     var random = Math.ceil(Math.random()*10)
//     var findMe = parseInt(prompt(`Please guest a number from 1 to 10`))
//     if(findMe != random) {
//         alert(`number ${findMe}. is not right number Try it again `)
//     }else{ 
//         alert(`Congrats you guess number ${findMe}. its correct!!`)
// }
// }while(findMe != random);

// var counter = 0;
// var diff;
// var preDiff;
// var temp;


// do{
//     counter ++;
//     var userName;
//     userName = prompt(`lets guess my number. between 1-10, or type q for quit`)
//     var randomNumber = Math.ceil(Math.random() *10);
//     diff = Math.abs(randomNumber - userName);


//     if (preDiff == undefined) {
//         temp = ' dont worry'
//     } else if (diff > preDiff){
//         temp = 'colder'
//     } else if (diff < preDiff) {
//         temp = 'warmer'
//     } else {
//         temp = 'same'
//     }
//     preDiff = diff

//     if(userName == 'q'){
//         alert(`sorry for tthe game you dont like it`)
//     } else if(userName == randomNumber) {
//         alert(`wow you guess after ${counter} it well number ${randomNumber}`)
//     } else if(userName < randomNumber) {
//         alert('its too low');
//     } else if(userName > randomNumber) {
//         alert('its too high');
//     }
// } while (userName != randomNumber && userName != 'q');


// var userNumber;

// //var counter = 0;
// var diff;
// var preDiff;
// var temp;

// do {

//     counter++;
//     userNumber = prompt(`Let's guess my number. It's between 1-10 ${randomNumber}` , `Please type only q to quit`);

//     diff = Math.abs(randomNumber - userNumber);
    
// /*     if (preDiff != undefined) {
//         if (diff > preDiff) {
//             temp = 'colder'
//         } else {
//             temp = 'warmer'
//         }
//     } else {
//         temp = ''
//     } */

//     if (preDiff == undefined) {
//         temp = 'no worries this is the first round'
//     } else if (diff > preDiff) {
//         temp = 'colder'
//     } else if (diff < preDiff) {
//         temp = 'warmer'
//     } else {
//         temp = 'same'
//     }

//     preDiff = diff;

//     if (userNumber == 'q') {
//         alert(`I'm sorry to hear you don't wanna play with me 😩`);
//     } else if (userNumber == randomNumber) {
//         alert(`Yeyyy you catch me at ${counter}. time. It was ${randomNumber}`);
//     } else if (userNumber < randomNumber) {
//         alert(`It's too low and ${temp}`);
//     } else if (userNumber > randomNumber) {
//         alert(`It's too high and ${temp}`);
//     }

// } while (userNumber != randomNumber && userNumber != 'q');

/* 
var i = 0;
do {
    i++;
    alert(i); 
} while (i<3);
i = 0;
while (i<3) {
    i++;
    alert(i); 
}
for (let i = 1; i <= 3; i++) {
    alert(i)
}
 */
// var randomNumber;

// do {
//     randomNumber = Math.ceil(Math.random()*10);
//     userNumber = prompt(`Would you like to play again? ${randomNumber}` , `Press q to quit`);
// if (userNumber == 'q') {
//     break;
// }
// for (let counter = 1; counter <= 3; counter++) {

//     //counter++;
//     userNumber = prompt(`Let's guess my number. It's between 1-10 ${randomNumber}` , `Please type only q to quit`);

//     diff = Math.abs(randomNumber - userNumber);
    
// /*     if (preDiff != undefined) {
//         if (diff > preDiff) {
//             temp = 'colder'
//         } else {
//             temp = 'warmer'
//         }
//     } else {
//         temp = ''
//     } */
    
//     if (preDiff == undefined) {
//         temp = 'no worries this is the first round'
//     } else if (diff > preDiff) {
//         temp = 'colder'
//     } else if (diff < preDiff) {
//         temp = 'warmer'
//     } else {
//         temp = 'same'
//     }

//     preDiff = diff;

//       if (counter == 3 && userNumber != randomNumber) {
//         alert(`Game is over, you loose`);
//     } else if (userNumber == 'q') {
//         alert(`I'm sorry to hear you don't wanna play with me 😩`);
//         break
//     } else if (userNumber == randomNumber) {
//         alert(`Yeyyy you catch me at ${counter}. time. It was ${randomNumber}`);
//         break
//     } else if (userNumber < randomNumber) {
//         alert(`It's too low and ${temp}`);
//     } else if (userNumber > randomNumber) {
//         alert(`It's too high and ${temp}`);
//     }
// } 
// } while (userNumber != 'q');
/* 
if (userNumber != randomNumber) {
    alert(`Game is over, you loose`);
} */

//while (userNumber != randomNumber && userNumber != 'q');


// var output = '';

// for (let i = 0; i < 5; i++) {
//     for (let i = 0; i <= 5; i++) {
//         output = '*' + output ;
//         console.log(output);
//     }
// }
// function drawTree(height) {
//     for ( var i = 0; i < height ; i++ ) {
//         var star = '*';
//         var space = ' ';

//         for ( var j = 1; j <= i; j++ ) {
//             star = star + '**';            
//         }
           
//         var spacesBefore = space.repeat(height-i-1);
//         star = spacesBefore + star;
//         console.log(star);
//     }
// }

// var levels = prompt('How many levels high should be the tree?');

// drawTree(levels);
// let x = -1;
// for (let i = 0; i < x; i++) {
//     var star = '*';
//     var space = ' ';

//     for (let y = 1; y <= i; y++) {
//         star = star + '**';
//     }
//     var firstSpace = space.repeat(x -i -1);
//     star = firstSpace + star;
//     console.log(star);
// }

// var txt = "";
// for(i = 1; i <= 10; i++){
// txt = "";
// for(j = i; j < 10; j++){
// txt += " ";
// }

// for(k = 0; k < (i*2) -1; k++){
// txt += "*";
// }
// console.log(txt);
// } 

// var txt = "";
// for(i = 1; i <= 10; i++){
// txt = "";
// for(j = i; j < 10; j++){
// txt += " ";
// }

// for(k = 0; k < (i*2) -1; k++){
// txt += "*";
// }
// console.log(txt);
// }
for (let i = 0; i < 10; i++) {
    var text = '';
    for (let c = 0; c < 10-i; c++) {
            text += ' ';
    }
    for (let x = 0; x < i*2+1; x++) {
        text += 'A';
    }
    console.log(text);
}
console.log('° ° ° ° ° ° ° ° ° ° °');
console.log('😩~~~~😩~~~~😩~~~~~😩');
for (let i = 0; i < 20; i++) {
    var text = '';    
    for (let c = 0; c < i+1; c++) {
        text += ' ';
}
    for (let x = 0; x < 19-i*2; x++) {
        text += 'V';
    }
    console.log(text);
}


//with feet
for (let i = 0; i < 16; i++) {
    var text = '';
    for (let c = 0; c < 16-i; c++) {
            text += ' ';
    }
    for (let x = 0; x < i*2+1; x++) {
        text += '☘️';
    }
    console.log(text);
}


   
for (let i = 0; i < 3; i++) {
    var text = '';    
    for (let c = 0; c < 13-i; c++) {
        text += ' ';
}
    for (let x = 1; x < i*1+4; x++) {
        text += '🪵';
    }
    console.log(text);
}
