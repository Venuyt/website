var signup=document.querySelector("#signup")
var back=document.querySelector(".bg")
var button=document.querySelector(".bns")
button.addEventListener("click",function()
{
    signup.style.display="block"
    back.style.display="block"
})
var submit=document.querySelector("#abc")
submit.addEventListener("click",function(){
    alert("your DATA stored")
})
var cancel=document.querySelector("#ABC")
    cancel.addEventListener("click",function(){
        signup.style.display="none"
    back.style.display="none"
        
    })

 