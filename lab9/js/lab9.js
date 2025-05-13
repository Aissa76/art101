// index.js - This simple javaScript/jQuery script uses buttons to modify some elements on the page
// Author: Aissa Ben-Mimoun
// Date: 5/12/25
// requirments: jQuery must be loaded for this script to work.


//Append buttons to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

//Toggle special class on click
$("#button-challenge").click(function() {
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});

$("#button-results").click(function() {
    $("#results").toggleClass("special");
});


// Task X - Add the same class to all special sections
$(".special-section").append("<button class='make-special'>Make Special>/button>");

// Attach one click handler to all special buttons
$(".make-special").click(function(){
    $(this).parent().toggleClass("special");
});