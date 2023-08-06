var namefeild=document.getElementById("name");
var signup=document.getElementById("signupbtn");
var login=document.getElementById("loginbtn");
var contact=document.getElementById("contact");
var heading=document.getElementById("title");

login.addEventListener("click",function(){
    
    heading.innerHTML="Login";
   

});
login.addEventListener("click",function(){
    namefeild.style.display="none";
    contact.style.display="none";


});
signup.addEventListener("click",function(){
    heading.innerHTML="Sign up";
    namefeild.maxHeight="60px"
    contact.maxHeight="60px";
});
signup.addEventListener("click",function(){
   namefeild.style.display="namefeild";
   contact.style.display="contact";
});
