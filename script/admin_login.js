let adminLogin=document.querySelector("#admin-login")
adminLogin.addEventListener("click",function(){
    let loginId=document.querySelector("#admin-id").value;
    let loginPassword=document.querySelector("#admin-password").value
    if(loginId=="admin" && loginPassword==="admin"){
        alert("Admin Login Sucessful.")
       window.location.href="./adminDashboard.html"
    }else{
        alert("Please Enter corrrect Username or Password")
    }
})


