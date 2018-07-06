function showWeb(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display ="block";
  y.style.display ="none";
  z.style.display ="none";
  p.style.display ="none";

  var a1 = document.getElementById("cvArticle");
  var a2 = document.getElementById("frontPageArticle");
  var a3 = document.getElementById("webdesignArticle");
  a1.style.display ="none";
  a2.style.display ="none";
  a3.style.display ="block";

}
function showAni(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display ="none";
  y.style.display ="block";
  z.style.display ="none";
  p.style.display ="none";
}
function show3D(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display ="none";
  y.style.display ="none";
  z.style.display ="block";
  p.style.display ="none";
}
function showCV(){
  var x = document.getElementById("subMenuWeb");
  var y = document.getElementById("subMenuAni");
  var z = document.getElementById("subMenu3D");
  var p = document.getElementById("subMenuCV");
  x.style.display ="none";
  y.style.display ="none";
  z.style.display ="none";
  p.style.display ="block";

  var a1 = document.getElementById("cvArticle");
  var a2 = document.getElementById("frontPageArticle");
  var a3 = document.getElementById("webdesignArticle");
  a1.style.display ="block";
  a2.style.display ="none";
  a3.style.display ="none";
}
