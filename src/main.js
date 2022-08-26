document.addEventListene("DOMContentLoaded", ()=> {

    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("LinkCreateAccount").addEventListener("click",e =>{
        e.prevenDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");


    });
    
    document.querySelector("LinkSignin").addEventListener("click",e =>{
        e.prevenDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");


    });


});