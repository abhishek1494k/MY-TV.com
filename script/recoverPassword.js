


let newcaptcha=document.getElementById("newcaptcha")
let image=document.getElementById("captcha")
let count=0
newcaptcha.addEventListener("click",function(){
   
    if(count==0){
        image.src="captcha1.png" 
        count++
    }else if(count==1){
        image.src="captcha2.png"
        count++
    }else if(count==2){
        image.src="captcha3.png"
        count=0
    }
})