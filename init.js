let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
let login = document.getElementById("btn-login");
let register = document.getElementById("btn-register");

login.addEventListener("click", () => {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    register.style.color = "grey";
    login.style.color = "white"
})
register.addEventListener("click", () => {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    register.style.color = "white";
    login.style.color = "grey"
})
