hideAll()
var frontPageArticle = document.getElementById("frontPageArticle");
frontPageArticle.style.display = "block";

function showInfo(){
  var x = document.getElementById("infoCard");
  if (x.style.display == false){
    x.style.display = "block";
  }else{
    hideInfo();
  }
}

function hideInfo(){
  var x = document.getElementById("infoCard");
  x.style.display = "";
}
function hideAll(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  p.style.display = "none";

  hideArticles()
}

function hideArticles(){
  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display = "none";
  awd.style.display = "";
  ani.style.display = "";
  add.style.display = "";
  acv.style.display = "";

  var slides = document.getElementsByClassName("articleSlides");
  // running loop times equal to the amount of "slides"
  for (i = 0; i < slides.length; i++) {
    // assigner style "display none" to slides(1), slides(2), and slide(3) if only 3 slides are used on the site
    slides[i].style.display = "none";
  }
}
function showWeb(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("webdesignArticle");

  if (x.style.display == "none") {
    hideAll();
    x.style.display = "block";
    y.style.display = "block";
  } else {
    hideAll();
    var z = document.getElementById("frontPageArticle");
    z.style.display = "block";
  }
}

function showAni(){
  var x = document.getElementById("subMenuAni");
  var y = document.getElementById("animationArticle");

  if (x.style.display == "none") {
    hideAll();
    x.style.display = "block";
    y.style.display = "block";
  } else {
    hideAll();
    var z = document.getElementById("frontPageArticle");
    z.style.display = "block";
  }
}

function show3D(){
  var x = document.getElementById("subMenu3D");
  var y = document.getElementById("dddArticle");

  if (x.style.display == "none") {
    hideAll();
    x.style.display = "block";
    y.style.display = "block";
  } else {
    hideAll();
    var z = document.getElementById("frontPageArticle");
    z.style.display = "block";
  }
}

function showCV(){
  var x = document.getElementById("subMenuCV");
  var y = document.getElementById("cvArticle");

  if (x.style.display == "none") {
    hideAll();
    x.style.display = "block";
    y.style.display = "block";
  } else {
    hideAll();
    var z = document.getElementById("frontPageArticle");
    z.style.display = "block";
  }
}


// function run when pressing a button with either 1, 2, or 3 as a value assigned to it
function currentSlide(n) {
  // reassigning slideIndex the value of n
  showArticles(slideIndex = n);
}


function showArticles(n) {
  hideArticles()
  var i;
  // locating and assigning DIVs, with the class "mySlides" assigned, to array "slides"
  var slides = document.getElementsByClassName("articleSlides");
  // if imported js value is higher than the amount of imported "slides" (.mySlides) assign 1 to js value "slideIndex"
  if (n > slides.length) {
    console.log("running if n > slides length");
    slideIndex = 1}
  // if imported js value is less than 1 assign slideIndex the value equal to the amount of "slides" (.mySlides) imported
  if (n < 1) {
    console.log("running if n < 1");
    slideIndex = slides.length}
  // running loop times equal to the amount of "slides"
  for (i = 0; i < slides.length; i++) {
    // assigner style "display none" to slides(1), slides(2), and slide(3) if only 3 slides are used on the site
    slides[i].style.display = "none";
  }
  // assigner style "display block" to 1 slide at (js values start at 0)
  slides[slideIndex-1].style.display = "block";
  showSubSlides(n)
}


// -----------------------------------------------------------------------------


function showSubSlides(n) {
  var i;
  // locating and assigning DIVs, with the class "mySlides" assigned, to array "slides"
  var slides = document.getElementsByClassName("articleSubSlides");
  // if imported js value is higher than the amount of imported "slides" (.mySlides) assign 1 to js value "slideIndex"
  if (n > slides.length) {
    slideIndex = 1}
  // if imported js value is less than 1 assign slideIndex the value equal to the amount of "slides" (.mySlides) imported
  if (n < 1) {
    slideIndex = slides.length}
  // running loop times equal to the amount of "slides"
  for (i = 0; i < slides.length; i++) {
    // assigner style "display none" to slides(1), slides(2), and slide(3) if only 3 slides are used on the site
    slides[i].style.display = "none";
  }
  // assigner style "display block" to 1 slide at (js values start at 0)
  slides[slideIndex-1].style.display = "block";
}

// function run when pressing pointers (value either 1 0r -1)
function plusSubSlides(n) {
  console.log("running plusSubSlides");
  // "adding" n value to that of slideIndex
  showSubSlides(slideIndex += n);
}
