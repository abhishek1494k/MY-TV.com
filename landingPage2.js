let container=document.querySelector(".container_2");

async function fetchData() {
    try {
      let res = await fetch(
        "https://63986336044fa481d69b935b.mockapi.io/movie"
      );
      let data = await res.json();
      console.log(data)
      renderData(data);
    } catch (err) {
      console.log("ERR");
    }
  }


  function renderData(data){
    let arr=data.map((e)=>{
        return `<div class="card">
        <img src=${e.poster}/>
        </div>`
    })

    container.innerHTML=arr.join("")
  }

  fetchData();