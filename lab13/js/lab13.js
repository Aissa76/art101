/*
  lab13.js - Creating a FizzBuzz loop
  Requirments: jQuery must be loaded.

  Author: Aissa Ben-Mimoun <abenmimo@ucsc.edu>
  Date: 5/26/25
  */

//FizzBuzz function to display to numbers and their corresponding words for multiples of 3, 5, and 7
function fizzBuzz(){
    // Declare an empty string to get the output
    $("#output").html("");
    
    // Loop though numbers 1 to 200
    for (let i = 1; i <= 200; i++){
        let str = ""; //Start with an empty string for each number
       
        // Check for multiple of 3 and 7 (FizzBuzz)
        if (i % 15 === 0){
           str += "FizzBuzz";
        }
        // Check for multiple of 5 and 7 (BuzzBoom)
        else if (i % 21 === 0){
            str += "FizzBoom";
        }
        // Check for multiple of 5 and 7 (BuzzBoom)
        else if (i % 35 === 0){
            str += "FizzBoom";
        }
        // Check for multiple of 3
        else if (i % 3 === 0){
            str += "Fizz";
        }
        // Check for multiple of 5
        else if (i % 5 === 0){
            str =+ "Buzz";
        }
        // Check for multiple of 7
        else if (i % 7 === 0){
            str += "Boom";
        }

        else{
            str = i;
        }

        // Append each result in a <p> tag
        $("#output").append("<p>" + str + "</p>")
    }
}

// Call the fizzBuzz function to execture
fizzBuzz();