

// let apiurl = "http://localhost:3333";

import { default as axios } from "axios"

const myform  = document.getElementById("data-form")
const email = document.getElementById("email_user")
const password = document.getElementById("password_user")
const name = document.getElementById("name_user")
const lastname = document.getElementById("lastname_user")
const phone = document.getElementById("tel_user")
const roomnumber = document.getElementById("roomnumber_user")

myform.addEventListener("submit", e =>{
e.preventDefault();
    async function Main() {
        await axios.post("url","http://localhost:3333")
    }


const  apiurl = "http://localhost:3333";
const formData = new FormData();

console.log(email)

})

