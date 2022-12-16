let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")
let btn7=document.getElementById("btn7")



let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let p3=document.getElementById("p3")
let p4=document.getElementById("p4")
let p5=document.getElementById("p5")
let p6=document.getElementById("p6")
let p7=document.getElementById("p7")

let count1=0
btn1.addEventListener("click",function(){
    if(count1%2==0){
        p1.style.display="block";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        btn1.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn3.style.border="none"
        btn4.style.border="none"
        btn5.style.border="none"
        btn6.style.border="none"
        btn7.style.border="none"
        count1++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count1++
    }
})
let count2=0;
btn2.addEventListener("click",function(){
    if(count2%2==0){
        p1.style.display="none";
        p2.style.display="block";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        btn2.style.border="4px solid skyBlue";
        btn1.style.border="none";
        btn3.style.border="none"
        btn4.style.border="none"
        btn5.style.border="none"
        btn6.style.border="none"
        btn7.style.border="none"
        count2++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count2++
    }

})
let count3=0;
btn3.addEventListener("click",function(){
    if(count3%2==0){
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="block";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        btn3.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn1.style.border="none"
        btn4.style.border="none"
        btn5.style.border="none"
        btn6.style.border="none"
        btn7.style.border="none"
        count3++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count3++
    }

})
let count4=0;
btn4.addEventListener("click",function(){
    if(count4%2==0){
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="block";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        btn4.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn3.style.border="none"
        btn1.style.border="none"
        btn5.style.border="none"
        btn6.style.border="none"
        btn7.style.border="none"
        count4++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count4++
    }

})
let count5=0;
btn5.addEventListener("click",function(){
    if(count5%2==0){
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="block"
        p6.style.display="none"
        p7.style.display="none"  
        btn5.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn3.style.border="none"
        btn4.style.border="none"
        btn1.style.border="none"
        btn6.style.border="none"
        btn7.style.border="none"
        count5++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count5++
    }

})
let count6=0;
btn6.addEventListener("click",function(){
    if(count6%2==0){
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="block";
        p7.style.display="none";
        btn6.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn3.style.border="none"
        btn4.style.border="none"
        btn5.style.border="none"
        btn1.style.border="none"
        btn7.style.border="none"
        count6++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count6++
    }

})
let count7=0;
btn7.addEventListener("click",function(){
    if(count7%2==0){
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="block";
        btn7.style.border="4px solid skyBlue";
        btn2.style.border="none";
        btn3.style.border="none"
        btn4.style.border="none"
        btn5.style.border="none"
        btn6.style.border="none"
        btn1.style.border="none"
        count7++
    }else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        p4.style.display="none";
        p5.style.display="none";
        p6.style.display="none";
        p7.style.display="none";
        count7++
    }
})


