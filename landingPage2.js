let url = "https://63986336044fa481d69b935b.mockapi.io/mytv";
let bag=[];
async function getdata(){
    try {
        let res= await fetch(url);
        let out=await res.json();
        bag=out;
        display(out);
    } catch (error) {
        // alert("error")
    }
};
getdata();

let url2 = "https://639889b9044fa481d6a154f8.mockapi.io/user";
let bag2=[];
async function getdata2(){
    try {
        let res= await fetch(url2);
        let out=await res.json();
        bag2=out;
        console.log(bag2[bag2.length-1].image)
        display2(out);
    } catch (error) {
        // alert("error")
    }
};
getdata2();


let count=0;

function display(out){
    document.querySelector(".card1").innerHTML=""    
    for(let i=0; i<5; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);

        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card1").append(div);
    }

    // let doc=document.querySelectorAll(".container_2 .card1 div")
    // for(let x of doc){
    //     x.addEventListener("click",()=>{
    //         console.log()
    //     })
    // }
    // console.log(doc)

    document.querySelector(".card2").innerHTML=""  
    let x1=count+5;  
    for(let i=count; i<x1; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card2").append(div);
    }

    document.querySelector(".card3").innerHTML=""  
    let x2=count+5;  
    for(let i=count; i<x2; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card3").append(div);
    }

    document.querySelector(".card4").innerHTML=""  
    let x3=count+5;  
    for(let i=count; i<x3; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");

        img.setAttribute("src",out[i].poster);
        let br=document.createElement("br")

        let des=document.createElement("p")
        des.innerText=out[i].description.substring(0,80)+" ...."

        let des1=document.createElement("a")
        des1.setAttribute("href","#")
        des1.innerText="Read More";
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        div.append(img,br,des,des1);
        document.querySelector(".card4").append(div);
    }
    document.querySelector(".card5").innerHTML=""  
    let x4=count+5;  
    for(let i=count; i<x4; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card5").append(div);
    }
    document.querySelector(".card7").innerHTML=""  
    let x5=count+5;  
    for(let i=count; i<x5; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card7").append(div);
    }
    document.querySelector(".card6").innerHTML=""  
    let x6=count+5;  
    for(let i=count; i<x6; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card6").append(div);
    }
    console.log(count)
    document.querySelector(".card7").innerHTML=""  
    let x7=count+5;  
    for(let i=count; i<x7; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card7").append(div);
    }

    let h4= document.createElement("h4");
    h4.innerText="Watch Premieres for Free"
    document.querySelector(".card8").innerHTML=""   
    for(let i=count; i<out.length; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card8").append(h4,div);
    }
console.log(count,out.length)
if(count<out.length){
    document.querySelector(".card9").innerHTML= "";
    for(let i=count; i<out.length; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card9").append(div);
    }
}
if(count<out.length){
    document.querySelector(".card10").innerHTML= "";
    for(let i=count; i<out.length; i++){
        count++;
        let div= document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",out[i].poster);
        div.append(img);
        div.addEventListener("click",()=>{
            // console.log(out[i]);
            localStorage.setItem("movie_detail",JSON.stringify(out[i]))
            window.location.href="movie_detail_1.html";
        })
        document.querySelector(".card10").append(div);
    }
}
}


function display2(){
    let img = document.createElement("img")
    img.setAttribute("src",`${bag2[bag2.length-1].image}`)
    document.getElementById("search_login").append(img)
}




