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
    document.querySelector("#container").innerHTML="";
    out.forEach((elem) => {
        let di= document.createElement("div");
        let im=document.createElement("img");
        im.setAttribute("src",elem.poster);
        di.append(im);
        document.querySelector("#container").append(di);
    });
}

function sortfun(){
    let val=document.querySelector("#sort").value;
    if(val=="Highest Rating"){
        bag.sort(function(a,b){
            return b.rating - a.rating
        });
}else if(val=="Length"){
    bag.sort(function(a,b){
            return b.length - a.length
        });
}else if(val=="Year"){
    bag.sort(function(a,b){
        return b.year - a.year
    });
}
display(bag);
}

function filterfun(){
    let val2=document.querySelector("#filt").value;
    let filterdata= bag.filter(function(element){
        return element.language == val2;
    });
    display(filterdata);
};

function search(){
    let val3=document.querySelector("#valu").value;
    let newdata=bag.filter(function(ele){
        return ele.name.toLowerCase().includes(val3.toLowerCase());
    });
    display(newdata);
}