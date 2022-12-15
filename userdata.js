let api = `https://639889b9044fa481d6a154f8.mockapi.io/user`;

let midsec = document.querySelector(".mid-sec");
let details_btn = document.querySelector(".details_btn")
 
let sdata;

async function fetchuserdata() {
  let res = await fetch(api);
    let data = await res.json();
    sdata = data;
   
  renderDom(data);
  // console.log(data)
}
fetchuserdata();

function renderDom(data) {
  midsec.innerHTML = null;
  midsec.innerHTML = `${data
    .map((ele) => {
      data.length = 10;
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



let search = document.getElementById("userSearch")
search.addEventListener("input",user_search)
function user_search() {
    search.innerHTML = null;
    let latest = sdata.filter(function (ele) {
        return ele.name.toLowerCase().includes(search.value.toLowerCase());
    });
    // console.log(latest)
    renderDom(latest);
}

// function userSort(){
//     let sortSelect = document.querySelector(".userSort")
//    let scsort= sdata.sort(function (a, b) {
//         if (sortSelect.value==="Name") {
//           if (a.name > b.name) {
//             return 1;
//           } else if (a.name < b.name) {
//             return -1;
//           } else {
//             return 1;
//           }
//         } else {
          
//        }
//     });
    
    
//     renderDom(sdata);
// }

// function addclickondetail() {
//   details_btn.addEventListener("click", function () {
  
//   })
  
// }
// addclickondetail(sdata)


  let data = sdata.sort(function (a, b) {
    return a.plan - b.plan;
    renderDom(data)
  })
 
 

