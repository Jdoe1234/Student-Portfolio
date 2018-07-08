hideAll()
var frontPageArticle = document.getElementById("frontPageArticle");
frontPageArticle.style.display = "block";

function showInfo(){
  var x = document.getElementById("infoCard");
  if (x.style.display == false){
    x.style.display ="block";
  }else{
    hideInfo();
  }
}

function hideInfo(){
  var x = document.getElementById("infoCard");
  x.style.display ="";
}
function hideAll(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display ="none";
  y.style.display ="none";
  z.style.display ="none";
  p.style.display ="none";

  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display ="none";
  awd.style.display ="";
  ani.style.display ="";
  add.style.display ="";
  acv.style.display ="";
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
