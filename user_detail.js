async function getdata() {
    let response = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    // let response = await fetch(`https://639889b9044fa481d6a154f8.mockapi.io/user`);
    let data = await response.json();
    renderDom(data)
   
}
getdata()

let container = document.getElementById("container");
function renderDom(data) {
    data.forEach((ele) => {
    //     let card = document.createElement("div");
    //     let img = document.createElement("img");
    //     img.src = ele.image
    //    img.setAttribute("class","imgurl")
    //     card.append(img)
    //     container.append(card);
        console.log(ele.image)
    })
}
