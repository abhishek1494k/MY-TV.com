let api = `https://639889b9044fa481d6a154f8.mockapi.io/user`;

let midsec = document.querySelector(".mid-sec");


let tempdiv = document.getElementById("tempdiv");
 
let temp = []

async function fetchuserdata() {
  try {
    let res = await fetch(api);
    let data = await res.json();
    temp = data;
    console.log(data)
    // renderDom(data);
    create_btn(data.length,10)
    // console.log(data)
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
            <img src="${ele.image}" alt="">
                <p>${ele.name}</p>
                <p>${ele.email}</p>
               <button class="details_btn" data-id=${ele.id}>Details</button></div>
               <hr>
                `
    })
    .join("")}`;

  
}
let details_btn = document.querySelector(".details_btn");

async function deleteitem(id) {
  let res = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user/${id}`, {
    method:'DELETE',
  })
  if (res.ok) {
    alert("Deleted Sucessfully");
    let refresh = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    let data = await refresh.json();
    renderDom(data);
  }
}






function userSort() {
  let val = document.getElementById("userSort").value;
  if (val === "Plan") {
    temp.sort(function (a, b) {
      return a.plan - b.plan;
    });
  } else if (val === "Watch-hours") {
    temp.sort(function (a, b) {
      return a.watchhours - b.watchhours;
    })
  }
  renderDom(temp)
}


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




 
 

