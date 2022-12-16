async function getdata() {
    let response = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    // let response = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    let data = await response.json();
    console.log(data)
    renderDom(data)
    activeuser(data)
   
}
getdata()
let container = document.getElementById("main")
// let fd = [
//     {
//      "name": "Christy Barton",
//      "email": "Irwin.Schmitt@hotmail.com",
//      "mobile": "(591) 785-6499 x76046",
//      "subscription": "967.35",
//      "plan": 14,
//      "watchhours": 90,
//      "region": "Ecuador",
//      "Recent-watch-Movies": "39695",
//      "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/23.jpg",
//      "card-details": "01017980",
//      "active": true,
//      "id": "1"
//     }]
    // renderDom(fd)
    ;
    let userid;
function renderDom(data) {
    // data.length = 1;
    
    container.innerHTML = null;
    container.innerHTML = `${data.map((ele) => {
        userid = ele.id;
        console.log(userid)
        return `

        <div class="part_one">
            <img src="${ele.image}" alt="">
            <h4>${ele.email}</h4>
            <h5>${ele.mobile}</h5>
            <button class="dashboard">Dashboard</button>
        </div>
        <div class="part_two">
            <div class="item2">
                <h4>Subscription</h4>
                <p>${Math.round(ele.subscription/10)}   Days left</p>
            </div>
            <div class="item3">
                <h4>Region</h4>
                <p>${ele.region}</p>
            </div>
            <div class="item4">
                <h4>Active Plan</h4>
                <p>${+ele.plan} $</p>
            </div>
            <div class="item5">
                <h4>Watch Hours</h4>
                <p>${+ele.watchhours*10}</p>
            </div>
            <div class="item6">
                <h4>Recent watch Movies</h4>
                <ul>
                    <a href=""> <li>Avengers</li></a>
                    <a href=""><li>Jhon wick</li></a>
                     <a href=""> <li>Inception</li></a>
                    <a href=""> <li>Captain-America</li></a>
            </div>
            <div class="item7">
                <h4>Download</h4>
               <ul>
                <a href=""> <li>ECHO</li></a>
               <a href=""><li>LIttle America</li></a>
                <a href=""> <li>Ted Lasso</li></a>
               <a href=""> <li>Slow Horses: Season 2</li></a>
               
               </ul>
            </div>
            <div class="item8">
                <h4>Login Devices</h4>
                <p>Iphone 11</p>
                <p>Vivo V21</p>
            </div> 
            <div class="item9">Active</div>
        </div>
       `
    }).join('')}`
 
}
let home = document.getElementById("mylogo")
home.onclick=()=> {
    window.location.href='index.html'
}

function activeuser(au) {
    let aciveuserdiv = document.querySelector(".item9");
    console.log(au,"*************")
    au.forEach((ele) => {
        if (ele.active === true) {
            aciveuserdiv.innerText="Online"
            aciveuserdiv.setAttribute("style","color:red")
        } else {
            aciveuserdiv.innerText = "Offline"
            console.log(aciveuserdiv.innerText)
        }
    })
    renderDom(au)
}
let dash = document.getElementsByClassName("dash")
dash.onclick=()=> {
    window.location.href='adminDashboard.html'
}
 
