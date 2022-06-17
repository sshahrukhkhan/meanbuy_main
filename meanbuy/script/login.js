document.querySelector("#submit").addEventListener("click", loginbutton);
var regdUsers = JSON.parse(localStorage.getItem("Meandatabase")) ;
function loginbutton(event) {
event.preventDefault();
var pass = document.querySelector("#password").value;
var user = document.querySelector("#email").value;

for (var i = 0; i < regdUsers.length; i++) {
 
 if (regdUsers[i].emailadd == user && regdUsers[i].password == pass) {
     alert("login successful")
   window.location.href = "meanbuy.html";
   break;
 }
 else{
     alert("wrongpassword");
     window.location.href = "login.html"
 }
}
}