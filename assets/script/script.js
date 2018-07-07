function showWeb(){
  // x, y, z, p = used for submenu id's
  var x = document.getElementById("subMenuWeb");  var y = document.getElementById("subMenuAni");  var z = document.getElementById("subMenu3D"); var p = document.getElementById("subMenuCV");
  x.style.display ="block"; y.style.display ="none";  z.style.display ="none";  p.style.display ="none";

  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display ="none";
  awd.style.display ="block";
  ani.style.display ="none";
  add.style.display ="none";
  acv.style.display ="none";

}

function showAni(){
  var x = document.getElementById("subMenuWeb");  var y = document.getElementById("subMenuAni");  var z = document.getElementById("subMenu3D"); var p = document.getElementById("subMenuCV");
  x.style.display ="none";  y.style.display ="block"; z.style.display ="none";  p.style.display ="none";

  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display ="none";
  awd.style.display ="none";
  ani.style.display ="block";
  add.style.display ="none";
  acv.style.display ="none";
}

function show3D(){
  var x = document.getElementById("subMenuWeb");  var y = document.getElementById("subMenuAni");  var z = document.getElementById("subMenu3D"); var p = document.getElementById("subMenuCV");
  x.style.display ="none";  y.style.display ="none";  z.style.display ="block"; p.style.display ="none";

  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display ="none";
  awd.style.display ="none";
  ani.style.display ="none";
  add.style.display ="block";
  acv.style.display ="none";
}

function showCV(){
  var x = document.getElementById("subMenuWeb");  var y = document.getElementById("subMenuAni");  var z = document.getElementById("subMenu3D"); var p = document.getElementById("subMenuCV");
  x.style.display ="none";  y.style.display ="none";  z.style.display ="none";  p.style.display ="block";

  var afp = document.getElementById("frontPageArticle");
  var awd = document.getElementById("webdesignArticle");
  var ani = document.getElementById("animationArticle");
  var add = document.getElementById("dddArticle");
  var acv = document.getElementById("cvArticle");
  afp.style.display ="none";
  awd.style.display ="none";
  ani.style.display ="none";
  add.style.display ="none";
  acv.style.display ="block";
}
