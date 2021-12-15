// HEADER SHRINK ON SCROLL //
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() { 
	logoScroll()
	boxshadowFunction()
	progBarFunction()
};
// logo gets smaller on scroll
function logoScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myName").style.fontSize = "20px";
  } else {
    document.getElementById("myName").style.fontSize = "1.7rem";
  }
}
// header gets a box shadow on scroll
function boxshadowFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navShadow").style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.1)";
  } else {
    document.getElementById("navShadow").style.boxShadow = "none";
  }
}

// PROGRESS BAR //
// When the user scrolls the page, execute progBarFunction
function progBarFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}