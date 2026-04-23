const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function() {
    if(menu.style.display ==="none"){
        menu.style.display ="block";
    }
    else{
        menu.style.display ="none";
    }
});


//if statement

let age = 18;
let underage = 17;



if(age >= 18){
    console.log("Your are realiable to vote!");
}
     if (underage => age)
            console.log("your not realiable to vote!");


//if else statement

let grades = 60;

if(grades >=90){
    console.log("You Perfect the EXAM");
} else if(grades >= 80){
    console.log("You Pass the exam");

}else if(grades >=70){
    console.log("Study MORE!!!");

}else{
    console.log ("Better Luck Nextime NOOB!");
}

// example and practice

let userAge = document.getElementById("ageInput");
let submitBtn = document.getElementById("SubmitBtn");
let result = document.getElementById("result");

    submitBtn.addEventListener('click', function () {
   let age = Number(userAge.value); // get input value

    if (age >= 18) {
        result.textContent = "You have to vote!!";
    } else {
        result.textContent = "Don't have right to vote!";
    }
});

//example

let userGrade = document.getElementById("gradesInput");
let Sbutton = document.getElementById("Sbutton");
let gradesResult = document.getElementById("gradesResult");

Sbutton.addEventListener('click' , function(){
    let user = Number(userGrade.value); // Input grades for users

    if(user >= 90){
        gradesResult.textContent = "Your Grade is Exellecent!";
    }else if(user >=80){
        gradesResult.textContent = " Your Grade are Good!";
    }else if(user >=75){
        gradesResult.textContent = "Your Grades are Needs Improvement";
    }else{
        gradesResult.textContent = "You Fail";
    }
});

//Another example

const PressTheBtn = document.getElementById('PressTheBtn');
const Newlines = document.getElementById('Newlines');

PressTheBtn.addEventListener('click' ,function(){

const NewParagraph = document.createElement('p')
    NewParagraph.textContent = 'This is new line! ';
    Newlines.appendChild(NewParagraph);        
});

//Another example 

const Increment = document.getElementById('Increment');
const Decrement = document.getElementById('Decrement');
const CounterDisplay = document.getElementById('counter');

let counter = 0;

Increment.addEventListener('click', function(){
counter ++;
CounterDisplay.textContent = counter;
});

Decrement.addEventListener('click', function(){
counter --;
CounterDisplay.textContent = counter;
});




