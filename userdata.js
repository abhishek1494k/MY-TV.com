let api = `https://639889b9044fa481d6a154f8.mockapi.io/user`;

let midsec = document.querySelector(".mid-sec");
let sdata;
let sortdata;
async function fetchuserdata() {
  let res = await fetch(api);
    let data = await res.json();
    sdata = data;
    sortdata = data;
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
            <div>
            
            <img src="${ele.image}" alt="">
            
                <p>${ele.name}<p>
                <p>${ele.email}<p>
               <button class="details_btn">Details</button></div>
               <hr>
                `;
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
    console.log(latest)
    renderDom(latest);
}

function userSort(){
    let sort_value = document.querySelector(".userSort")
   let scsort= sortdata.sort(function (a, b) {
        if (sort_value.value==="Name") {
            return a.name - b.name;
       }
        else if (sort_value.value === "Country") {
            return a.region - b.region;
       }
        
    });
    console.log(scsort)
    
renderDom(scsort);
}
