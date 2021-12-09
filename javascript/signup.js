function submit(){
  var select = document.getElementById('option');
  var value = select.options[select.selectedIndex].value;
  console.log(value)
  if(value==="owner"){
    window.location.href="http://127.0.0.1:5500/static/ownersignup.html"
  }
  if(value==="tenant"){
    window.location.href="http://127.0.0.1:5500/static/tenantsignup.html";
  }
}