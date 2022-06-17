
var MeanData = JSON.parse(localStorage.getItem("Meandatabase")) || [];
document.querySelector("#submit").addEventListener("click", formsubmit);

var Meanstack = [];

function formsubmit(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#Password").value;

  var confirm = document.querySelector("#confirmpassword").value;

  
  var Meandata = {
    emailadd: email,
    password: pass,
    confirmed: confirm,
  };
  
  Meanstack.push(Meandata);
  
  localStorage.setItem("Meandatabase", JSON.stringify(Meanstack));
  

  
  alert("signup successful");
  
  window.location.href = "login.html";
}