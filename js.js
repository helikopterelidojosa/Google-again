
function getValue(){

var searchThis = document.getElementById('searchtext').value;

var readyGoogleLink = `https://www.google.com/search?q=${searchThis}`;



document.getElementById('goSearch').href = readyGoogleLink;

}

setInterval(getValue, 1000);

// Get the input field
var input = document.getElementById("searchtext");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("goSearch").click();
  }
});


function red(){
 document.body.style.backgroundColor = "#cc0000";

}

function blue(){
    document.body.style.backgroundColor = "#0033cc";
   
   }

   function green(){
    document.body.style.backgroundColor = "green";
   
   } 

   function orange(){
    document.body.style.backgroundColor = "#ff9900";
   
   }