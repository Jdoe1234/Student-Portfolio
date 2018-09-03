hideAll()
var frontPageArticle = document.getElementById("frontPageArticle");
frontPageArticle.style.display = "block";


// dosnt work when display = "", needs to be display = "none"
var a = document.getElementById("webdesignArticle");
a.style.display = "none";
var b = document.getElementById("animationArticle");
b.style.display = "none";
var c = document.getElementById("dddArticle");
c.style.display = "none";
var d = document.getElementById("cvArticle");
d.style.display = "none";

function showInfo(){
  var x = document.getElementById("infoCard");
  if (x.style.display == false){
    x.style.display = "flex";
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
  awd.style.display = "none";
  ani.style.display = "none";
  add.style.display = "none";
  acv.style.display = "none";

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

  if (y.style.display == "none") {
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

  if (y.style.display == "none") {
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

  if (y.style.display == "none") {
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

  if (y.style.display == "none") {
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
  var n = n-1;
  // locating and assigning DIVs, with the class "mySlides" assigned, to array "slides"
  var slides = document.getElementsByClassName("articleSlides");

  // getting current parent article slide and assigning it value "curentSlide"
  var currentSlide = slides[n];
  currentSlide.style.display = "block";

  // getting class children "articleSubSlides" of "articleSlides"
  var subSlides = currentSlide.getElementsByClassName("articleSubSlides")

  plusSubSlides(n, -1);
}


function plusSubSlides(n, j) {
  var j = j+1;
  var slides = document.getElementsByClassName("articleSlides");
  var currentSlide = slides[n];
  var subSlides = currentSlide.getElementsByClassName("articleSubSlides");
  for (var i = 0; i < subSlides.length; i++) {
    subSlides[i].style.display = "none";
  }
  subSlides[j].style.display = "flex";

}
