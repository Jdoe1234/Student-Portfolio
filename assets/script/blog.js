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
