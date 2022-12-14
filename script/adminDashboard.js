let showMoviesBtn=document.querySelector("#show-all-movie")
let sortAndSearch=document.querySelector("#sort-and-search")

let bag=[]
showMoviesBtn.addEventListener("click",async function(){
    try {
        let res=await fetch("https://63986336044fa481d69b935b.mockapi.io/movie")     
        if(res.ok){
            let data=await res.json()
            bag=[...data]
            display(data)
            sortedData(data)
            searchMovies(data)
        }       
    } catch (error) {
        alert(error)
    }
})
let showallmovies=document.querySelector("#show-all-movies")

function display(data){
    // console.log(data)
    showallmovies.innerHTML=""
   showallmovies.innerHTML=`
   ${data.map((item)=>{
        let id=item.id
        let image=item.poster;
        let title=item.name;
        let year=item.year;
        let rating=item.rating
       return  getAscard(image,title,year,rating,id)
     }).join("")}
   `
   let deleteBtns=document.querySelectorAll(".delete-btn")
    for(let deleteBtn of deleteBtns){
        deleteBtn.addEventListener("click",function(event){
                console.log(event.target.dataset.id)
         })
    }
//   

}

function getAscard(image,title,year,rating,id){
   return `
   <div>
      <img src="${image}" alt="">
      <h2>${title}</h2>
      <p>Release Year:${year}</p>
      <p>Rating:${rating}</p>
      <button class="delete-btn" data-id=${id}>Delete</button>
   </div>
   `
}

let sorted_value=document.querySelector("#sorting-data")

function sortedData(data){
    let temp=[...bag]
    sorted_value.addEventListener("change",function(){
        if(sorted_value.value==""){
            display(temp)
        }
        else if(sorted_value.value=="year"){
            data.sort((a,b)=> a.year-b.year)
            display(data)
        }else if(sorted_value.value=="rating"){
            data.sort((a,b)=> a.rating-b.rating)
            display(data)
        }
        
      }) 
}


// searchMovie.addEventListener("input",function(){
//     console.log(searchMovie.value)
// })

function searchMovies(data){
    let searchMovie=document.querySelector("#search")
    searchMovie.addEventListener("input",function(){
      let searchedData =data.filter((item)=>{
            return item.name.toLowerCase().includes(searchMovie.value.toLowerCase())
        })
        // console.log(searchedData)
        display(searchedData)
        sortedData(searchedData)
    })
    
}