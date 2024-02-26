let head = document.querySelector("h1")
let heads = document.querySelector("h2")
let number = 2306
let numbers = 2310

head.innerHTML = `My Creative it Batch is: ${number}`
heads.innerHTML = `My Creative it Batch is: ${numbers}`

let email = document.querySelector(".email")
let username = document.querySelector(".username")
let result = document.querySelector(".result")
let btn = document.querySelector(".btn")

let error =document.querySelector(".error")
let resulterr = document.querySelector(".resulterr")
let nameerr = document.querySelector(".nameerr")

let emailregex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


btn.addEventListener("click",function(){
        if(email.value == ""){
            error.innerHTML  = " Please Enter Your Gmail "
            email.style.border = "1px solid red" 
        }else if(!email.value.match(emailregex)){
            error.innerHTML  = " Email Formet Error! "  
            email.style.border = "1px solid red" 
            email.style.border = "1px solid red" 

        }
        else{
            error.innerHTML = ""
            email.style.border = "1px solid" 

        }

        if(result.value == ""){
            resulterr.innerHTML = " Please Enter Your Result "
            result.style.border = "1px solid red" 

        }else{
            resulterr.innerHTML  = ""
            result.style.border = "1px solid" 

        }

        if(username.value == ""){
            nameerr.innerHTML = " Please Enter Your Name "
            username.style.border = "1px solid red" 

        }else{
            nameerr.innerHTML = ""
            username.style.border = "1px solid" 


        }
})  

