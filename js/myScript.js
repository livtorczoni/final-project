/******
TABLE OF CONTENTS

1. Alert messages
2. Header shrink on dfsa.html (dress for success) & abp.html (austin bouldering project)
3. Progress Bar on same pages as "Header shrink"
4. Box Shadow on same pages as "header shrink"

******/

/********
ALERT MESSAAGES
**********/
// Home Page Alert messaage
function homeAlert() {
	home();
}
function home() {
	let home = alert('Hello, Professor Stamper! I have added Javascript and/or jQuery to all pages EXCEPT for the "about page. Each page will have an alert for your to read more about the Javascript and/or jQuery being used on the page. The only JS on this page is the alert.');
}

// Contact Page Alert Messaage
function contactAlert() {
	contact();
}
function contact() {
	let contact = alert('jQuery is being used at the bottom of this page as a FAQ. I created the FAQ for fun, so all questions and answers are not necessarily true as this is just for the project.');
}

// Dress for Success Alert
function dfsaAlert() {
	dfsa();
}
function dfsa() {
	let  dfsa = alert('On this page, three functions are being called onscroll. As the user scrolls down, the navigation logo (my name) will shrink, a boxshadaow will appear on the navigation, and there will be a progress bar that will let the user know how far down they have scrolled on the page.')
}

// Austin Bouldering Project Alert
function abpAlert() {
	abp();
}
function abp() {
	let  dfsa = alert('On this page, three functions are being called onscroll. As the user scrolls down, the navigation logo (my name) will shrink, a boxshadaow will appear on the navigation, and there will be a progress bar that will let the user know how far down they have scrolled on the page.')
}


/********
SCROLL FUNCTIONS
**********/

// Scroll Javascript
// When the user scrolls down 50px from the top of the document, many things happen! //
window.onscroll = function() { 
	logoScroll()
	boxshadowFunction()
	progBarFunction()
};

// Progress Bar
// When the user scrolls the page, execute progBarFunction
function progBarFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Header Shrink
// logo gets smaller on scroll
function logoScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myName").style.fontSize = "20px";
  } else {
    document.getElementById("myName").style.fontSize = "1.7rem";
  }
}

// Box Shadow
// The navigation has a box shadow after user has scrolled
function boxshadowFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navShadow").style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.1)";
  } else {
    document.getElementById("navShadow").style.boxShadow = "none";
  }
}

