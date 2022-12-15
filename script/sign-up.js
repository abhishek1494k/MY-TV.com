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

