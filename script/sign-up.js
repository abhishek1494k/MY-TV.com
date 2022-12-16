document.querySelector("#main form").addEventListener("submit",registerfun);
async function registerfun(event){
    try {
        event.preventDefault();
        let all_input_tags =document.querySelectorAll("#main input");
        let userobj = {
            ["name"] : all_input_tags[0].value,
            ["email"] : all_input_tags[1].value,
            ["password"] : all_input_tags[2].value,
            ["mobile"] : all_input_tags[3].value
        };
        let register_req = await fetch("https://639889b9044fa481d6a154f8.mockapi.io/user",{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userobj)
        });
        if(register_req.ok){
            alert("User has been Registerd")
            window.location.assign("log-in.html");
        }else{
            alert("bad request")
        }
        console.log(userobj);
    } catch (error) {
        alert("err")
    }
}


    let arr=JSON.parse(localStorage.getItem("data")) || [];
    document.querySelector("#main form").addEventListener("submit",myfun);
      function myfun(){
        let na,em,pa,mob;

             if(document.querySelector("#name").value!=="" && document.querySelector("#name").value.length>3){
                 na=document.querySelector("#name").value;
             }
            
             if(document.querySelector("#email").value!=="" && document.querySelector("#email").value.length>10){
                em=document.querySelector("#email").value;
             }
            
             if(document.querySelector("#pass").value!=="" && document.querySelector("#pass").value.length>6){
                 pa=document.querySelector("#pass").value;
             }
            
             if(document.querySelector("#mobileNo").value!=="" && document.querySelector("#mobileNo").value.length>6){
                 mob=document.querySelector("#mobileNo").value;
             }

             if(na==undefined || em==undefined || pa==undefined || mob==undefined){
                alert("Invalid Details")
             }else{
                let obj={
                na,
                em,
                pa,
                mob
             };

             arr.push(obj);
             localStorage.setItem("data",JSON.stringify(arr));
             document.querySelector("#name").value="";
             document.querySelector("#email").value="";
             document.querySelector("#pass").value="";
             document.querySelector("#mobileNo").value="";
             window.location.assign("log-in.html")
             alert("Sign Up Successful");
             }      
      }


