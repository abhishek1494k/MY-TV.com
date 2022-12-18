
let api = `https://639889b9044fa481d6a154f8.mockapi.io/user`;

let right_sec = document.querySelector("#right_sec");

let temp = [];

async function fetchuserdata() {
  try {
    let res = await fetch(api);
    let data = await res.json();
    temp = data;
    renderDom(temp)
    create_btn(data.length,10)
    console.log(temp)
  }
  catch (error) {
    console.log("error")

  }
}

function renderDom(data) {
  
    right_sec.innerHTML = null;
    right_sec.innerHTML = `${data
    .map((ele) => {
      // data.length = 10;
      return `

 <div id="datadiv">
 <div class="img-name-email">
    <div><img src="${ele.image}" alt=""></div>
    <div id="pnameEmail><p">${ele.name}</p></div>
    <div id="pnameEmail"><p >${ele.email}</p></div>
 </div> 
     <div class="dlt_detail">
         <button class="details_btn" data-id=${ele.id}>DETAILS</button>
       <button class="delete_btn" data-id=${ele.id}>REMOVE</button>
     </div> 
</div>
     `
    })
    .join("")}`;

    let details_btn = document.querySelectorAll(".details_btn");
  for (let dbtn of details_btn) {
    dbtn.addEventListener("click", function (event) {
      let id = event.target.dataset.id;
      for (let i = 0; i < data.length; i++){
        if (id === data[i].id) {
          // console.log(data[i])
          localStorage.setItem("userdetail_data",JSON.stringify(data[i]))
        window.location.href='user_detail.html'
        }
        
      }
     
      })
  }

  
    let delete_btn = document.querySelectorAll(".delete_btn");
  for (let dlt2 of delete_btn) {
    dlt2.addEventListener("click", function (event) {
      let id = event.target.dataset.id
      deleteitem(id)
      })
  }
  
}



async function deleteitem(id) {
  let res = await fetch(
    `https://639889b9044fa481d6a154f8.mockapi.io/user/${id}`,
    {
      method: "DELETE",
    }
  );
  if (res.ok) {
    alert("✅User Deleted Sucessfully");
    let respond = await fetch(
      `https://639889b9044fa481d6a154f8.mockapi.io/user`
    );
    let data = await respond.json();
    renderDom(data);
  }
}
 


// pagination functions


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
        btn.setAttribute("class","pageColor")
        
        
      btn.id = i;
      btn.innerText = i;
  
  
      btn.onclick = () => {
        pagedata(i,10)
        
      };
      pagination.append(btn);
     
      }
      let pageColor = document.querySelectorAll(".pageColor");


  }
  



let search = document.getElementById("userSearch");
search.addEventListener("input", user_search);
function user_search() {
  search.innerHTML = null;
  let latest = temp.filter(function (ele) {
    return ele.name.toLowerCase().includes(search.value.toLowerCase());
  });
  // console.log(latest)
  renderDom(latest);
}




//function for sorting by watch hour and plan
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




let dash = document.getElementById("dash")
dash.onclick=()=> {
    window.location.href='adminDashboard.html'
}

let movies = document.getElementById("movies");
movies.onclick = () => {
  window.location.href = 'adminDashboard.html';
}

