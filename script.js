// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
// set up text to print, each item in array is new line
var aText = new Array(
"Hello, my name is Job.",
"",
"I am a software developer."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
   
function typewriter()
{
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typedtext");

  while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send("service_5vappvb", "template_5ds4ud9", {
    name: name,
    email: email,
    message: message
  }).then(
    function (response) {
      alert("Message sent successfully!");
      document.querySelector('form').reset(); // Clear the form
    },
    function (error) {
      alert("Failed to send message. Please try again later.");
    }
  );
});


typewriter();