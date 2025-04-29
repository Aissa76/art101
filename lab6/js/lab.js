// lab 6 assignment
// Author: Aissa Ben-Mimoun
// Date:4/28/25

// Define Variables
var myTransport = [
  "car", "bike", "bus", "walk"
];

// create an object for my main ride
var myMainRide = {
  make: "Nissan",
  model: "Skyline",
  color: "White",
  year: 1995,
  age() {
      return new Date().getFullYear() - this.year;
}
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>") ;

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t') , "</pre>");