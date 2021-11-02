/*
* Programming Quiz: Laugh it Off 1
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should return the correct output
* - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


function laugh(){
    return "hahahahahahahahahaha!";
}
console.log(laugh());



/*
* Programming Quiz: Laugh it Off 2
*
* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
*
* Note:
*  - make sure your the final character is an exclamation mark ("!")
*  - make sure that your function produces the correct results when it is called multiple times
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should have one parameter named `num`
* - Your `laugh()` function should return the correct number of laughs
*/


function laughs(num){
    let laughter = "";
    for(let i = 1; i <= num; i++){
        laughter += "ha";
    }
    return `${laughter}!`;
}
console.log(laughs(5));


/*
* Programming Quiz: Build A Triangle
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `buildTriangle()` function
* - Your `buildTriangle()` function should take one argument (or you can say parameter)
* - Your `laugh()` function should build the triangle as describe above
*/

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
 }

 function buildTriangle(triangle){
     let tri = "";
     for(let i = 1; i <= triangle; i++){
         let tri = i;
         console.log(makeLine(tri));
     } 
     return;
 }
 console.log(buildTriangle(10));
 
 
 /*
* Programming Quiz: Laugh
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number of `hahaha`\'s
*/


const laughss = function(numbered){
    let laughing = "";
    for(i = 1; i <= numbered; i++){
        laughing += "ha"; 
    }
    return `${laughing}!`;
}
console.log(laughss(7));


/*
* Programming Quiz: Cry
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `cry`
* - Your code should include a named function expression stored in the variable `cry`
* - Your code should call the function expression using the variable name, not the function name
* - Your function expression should return the expected output
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


const cry = function sheCried(){
    return "boohoo!";
}
console.log(cry());


/*
* Programming Quiz: Inline Functions (5-6)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
 }
 
 emotions("happy", function laughs(num){
    let laughter = "";
    for(let i = 1; i <= num; i++){
        laughter += "ha";
    }
    return `${laughter}!`;
});











