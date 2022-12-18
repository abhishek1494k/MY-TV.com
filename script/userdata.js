// import details_dom from '../script/user_detail.js'


let api = `https://639889b9044fa481d6a154f8.mockapi.io/user`;

let midsec = document.querySelector(".mid-sec");

let temp = []

async function fetchuserdata() {
  try {
    let res = await fetch(api);
    let data = await res.json();
    temp = data;
    
    create_btn(data.length,10)
    
  }
  catch (error) {
    console.log("error")
  }
}


function renderDom(data) {
  midsec.innerHTML = null;
  midsec.innerHTML = `${data
    .map((ele) => {
      // data.length = 10;
      return `
      <div id="tempdiv">
<img class="imgNE" src="${ele.image}" alt="">
    <p class="imgNE">${ele.name}</p>
    <p class="imgNE">${ele.email}</p>              
    <button class="details_btn" data-id=${ele.id}>DETAILS</button>
    <button class="delete_btn" data-id=${ele.id}>REMOVE</button></div>
    <hr> `
    })
    .join("")}`;

    let detail_button = document.querySelectorAll(".details_btn");
  for (let dbtn of detail_button) {
    dbtn.addEventListener("click", function (event) {
      let id = event.target.dataset.id
      window.location.href='user_detail.html'
      // // Detailsofuser(id)
      localStorage.setItem("userdetail_data",JSON.stringify(data.id))
      })
  }

  
    let delete_button = document.querySelectorAll(".delete_btn");
  for (let dbtn of delete_button) {
    dbtn.addEventListener("click", function (event) {
      let id = event.target.dataset.id
      deleteitem(id)
      
      })
  }
  
 }
// updating data for user details page
// async function Detailsofuser(id) {
//   let res = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user/${id}`,{
//     method: "PUT",
//     body: JSON.stringify(id),
//     headers: {
//       'Content-Type':'application/json'
//     },
//   })
//   let data = await res.json();
//   console.log(data,"updated user data")
//   window.location.href="user_detail.html"
// }

// fuction for deleting specific user 
async function deleteitem(id) {
  let res = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user/${id}`, {
    method:'DELETE',
  })
  if (res.ok) {
    alert("Deleted Sucessfully");
    let respond = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    let data = await respond.json();
    renderDom(data);
  }
}






// sorting by watch hours and plan
let val = document.getElementById("userSort")
val.onchange = () => {
 userSort()
}
function userSort() {
  // let val = document.getElementById("userSort").value;
  if (val.value === "Plan") {
    temp.sort(function (a, b) {
      return a.plan - b.plan;
    });
  } else if (val.value === "Watch-hours") {
    temp.sort(function (a, b) {
      return a.watchhours - b.watchhours;
    })
  }
  renderDom(temp)
}


// search function for api

let search = document.getElementById("userSearch")
search.addEventListener("input",user_search)
function user_search() {
    search.innerHTML = null;
    let latest = temp.filter(function (ele) {
        return ele.name.toLowerCase().includes(search.value.toLowerCase());
    });
    // console.log(latest)
    renderDom(latest);
}

// pagination on mock api passing parameter page and limit

async function pagedata(i,limit) {
  try {
    let res = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user?page=${i}&limit=${limit}`);
    let data = await res.json();
    renderDom(data);
    
  }
  catch (error) {
    console.log("error")
  }
}
  
fetchuserdata();
pagedata(1,10)

// creating button for pagination

let pagination = document.getElementById("pagination");
const create_btn = (total_data, data_per_page) => {
  const button = Math.ceil(total_data / data_per_page);

  for (let i = 1; i <= button; i++){
    let btn = document.createElement("button")

    btn.id = i;
    btn.innerText = i;


    btn.onclick = () => {
      pagedata(i,10)
      
    };
    pagination.append(btn);
   
  }
}

// onclick functions f

let home = document.getElementById("mylogo")
home.onclick=()=> {
    window.location.href='index.html'
}
 
let dash = document.getElementById("dash")
dash.onclick=()=> {
    window.location.href='adminDashboard.html'
}
 

// post request


    
   
// const userdetailbtn =async(el)=>{
//   try{
//     let res = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`,{
//       method:"POST",
//       body:JSON.stringify(el),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })
//     console.log("wish")
//     let wish_d = await res.json()
//     console.log(wish_d)
    
//   }catch(error){
//     console.log(error)
//   }
// }





 
 



