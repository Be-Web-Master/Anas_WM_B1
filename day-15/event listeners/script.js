let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let age = document.getElementById("age")
let email= document.getElementById("email")
let phone= document.getElementById("phone")
let gender = document.getElementById("gender")
let errormessage =document.getElementById('p')[0]

console.log("error message")


const errorhandeling = (input) =>{
    if(input === "age" && age.value<18){
        error.innertext = "age should be greater than 18"
    
    }elseif(input === "phone" && phone.value.length !== 10 )  {
        error.innertext = "phone number should be of 10 digts"
    }

}
