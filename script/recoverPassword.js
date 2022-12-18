
let tvid=document.getElementById("mytvid");
let password=document.getElementById("password");
let captcha=document.getElementById("captchainput");
let submitBtn=document.getElementById("submitbtn");

let userdata=JSON.parse(localStorage.getItem("data"))||[]

submitBtn.addEventListener("click",function(){
    let obj={}
    if(captcha.value==="qGphJ" ||captcha.value==="B1A4" ||captcha.value==="fdamc"){
        obj["em"]=tvid.value;
        obj["pa"]=password.value;
        userdata.push(obj)
        localStorage.setItem("data",JSON.stringify(userdata))
        alert("Password Changed Sucessfully.")
        window.location.href="log-in.html"
    }else{
        alert("Please Enter Valid Captcha.")
    }
})


let newcaptcha=document.getElementById("newcaptcha")
let image=document.getElementById("captcha")
let count=0
newcaptcha.addEventListener("click",function(){
   
    if(count==0){
        image.src="./media/captcha1.png" 
        count++
    }else if(count==1){
        image.src="./media/captcha2.png"
        count++
    }else if(count==2){
        image.src="./media/captcha3.png"
        count=0
    }
})





