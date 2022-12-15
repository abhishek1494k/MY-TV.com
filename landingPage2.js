let url = "https://63986336044fa481d69b935b.mockapi.io/movie";
let bag=[];
async function getdata(){
    try {
        let res= await fetch(url);
        let out=await res.json();
        bag=out;
        display(out);
    } catch (error) {
        alert("error")
    }
};
getdata();

function display(out){
    document.querySelector(".container_2").innerHTML="";
    out.forEach((elem) => {
        let di= document.createElement("div");
        let im=document.createElement("img");
        im.setAttribute("src",elem.poster);
        di.append(im);
        document.querySelector(".container_2").append(di);
    });
}
