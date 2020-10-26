/* 26 October 2020
Sumayya Azzony
ID:2001768
Mid Exam
*/


function randomColor() //the random dice function
{
  var firstNumber = Math.random(); // first number generating
  var secondNumber = Math.random();
  var thirdtNumber = Math.random();
  var fourthNumber = Math.random();
  var fifthNumber = Math.random();
  var sixthNumber = Math.random();
  var seventhNumber = Math.random();
  var eighthNumber = Math.random();
  var ninthNumber = Math.random();
  firstNumber = firstNumber * 9; // since the generated number is between 0 & 1, in this line it multiplies by 9 to ensure it will be in range 1 to 9
  secondNumber = secondNumber * 9; // since the generated number is between 0 & 1, in this line it multiplies by 9 to ensure it will be in range 1 to 9
  thirdNumber = thirdNumber * 9;
  fourthNumber = fourthNumber * 9;
  fifthNumber = fifthNumber * 9;
  sixthNumber = sixthNumber * 9;
  seventhNumber = seventhNumber * 9;
  eighthNumber = eighthNumber * 9;
  ninthNumber = ninthNumber * 9;

  firstNumber = Math.floor(firstNumber) + 1; // to converted it to integer number
  secondNumber = Math.floor(secondNumber) + 1; // to converted it to integer number
  thirdNumber = Math.floor(thirdtNumber) + 1;
  fourthNumber = Math.floor(fourthNumber) + 1;
  fifthNumber = Math.floor(fifthNumber) + 1;
  sixthNumber = Math.floor(sixthNumber) + 1;
  seventhNumber = Math.floor(seventhNumber) + 1;
  eighthNumber = Math.floor(eighthNumber) + 1;
  ninthNumber = Math.floor(ninthNumber) + 1;

  if (firstNumber == 1) // if the first number equal to 1, so the red will appear
    document.querySelector(".red").remove("invisible");
  else if (firstNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (firstNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (firstNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (firstNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (firstNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (firstNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (firstNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the second
  if (secondNumber == 1) // if the first number equal to 1, so the red will appear
    document.querySelector(".red").remove("invisible");
  else if (secondNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (secondNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (secondNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (secondNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (secondNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (secondNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (secondNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the third color
  if (thirdNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (thirdNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (thirdNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (thirdNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (thirdNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (thirdNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (thirdNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (thirdNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the fourth randomColor
  if (fourthNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (fourthNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (fourthNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (fourthNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (fourthNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (fourthNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (fourthNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (fourthNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the fifth randomColor
  if (fifthNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (fifthNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (fifthNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (fifthNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (fifthNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (fifthNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (fifthNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (fifthNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the sixth randomColor
  if (sixthNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (sixthNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (sixthNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (sixthNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (sixthNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (sixthNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (sixthNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (sixthNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the seventh randomColor
  if (seventhNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (seventhNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (seventhNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (seventhNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (seventhNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (seventhNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (seventhNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (seventhNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
  //for the eigth randomColor
  if (eigthNumber == 1)
    document.querySelector(".red").remove("invisible");
  else if (eigthNumber == 2) {
    document.querySelector(".orange").remove("invisible");
  } else if (eigthNumber == 3) {
    document.querySelector(".yellow").remove("invisible");
  } else if (eigthNumber == 4) {
    document.querySelector(".green").remove("invisible");
  } else if (eigthNumber == 5) {
    document.querySelector("lightBlue").remove("invisible");
  } else if (eigthNumber == 6) {
    document.querySelector(".blue").remove("invisible");
  } else if (eigthNumber == 7) {
    document.querySelector(".white").remove("invisible");
  } else if (eigthNumber == 8) {
    document.querySelector(".gray").remove("invisible");
  } else {
    document.querySelector("pink").remove("invisible");
  }
//for the ninth randomColor
if (ninthNumber == 1)
  document.querySelector(".red").remove("invisible");
else if (ninthNumber == 2) {
  document.querySelector(".orange").remove("invisible");
} else if (ninthNumber == 3) {
  document.querySelector(".yellow").remove("invisible");
} else if (ninthNumber == 4) {
  document.querySelector(".green").remove("invisible");
} else if (ninthNumber == 5) {
  document.querySelector(".lightBlue").remove("invisible");
} else if (ninthNumber == 6) {
  document.querySelector(".blue").remove("invisible");
} else if (ninthNumber == 7) {
  document.querySelector(".white").remove("invisible");
} else if (ninthNumber == 8) {
  document.querySelector(".gray").remove("invisible");
} else {
  document.querySelector("pink").remove("invisible");
}

}

//function for generating 9 numbers
//  second option of the game
function disappearing(){
document.querySelector(".red, .orange, .yellow, .green, .lightBlue, .blue, .white,.gray,.pink").style.color="lightBlue";
document.querySelector(".red").display();
//to display a random numbers
var disAppearedNum=[]; //array to save disappearing numbers
var randomNumber;
for(var i=0;i<9;i++){
randomNumber=Math.random();
randomNumber=randomNumber*9;
randomNumber=Math.floor(randomNumber) + 1;
disAppearedNum[i]=randomNumber;

}


return alert("the order in which numbers disappeared is:"  + randomNumber );
}
