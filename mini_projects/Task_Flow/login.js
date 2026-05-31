function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username.trim() === "") {
        document.querySelector("p").innerHTML = "Required!";
        document.getElementById("username").style.border = "1px solid red";
        return;
    } else {
        document.querySelector("p").innerHTML = "";
        document.getElementById("username").style.border = "0.5px solid grey";
        localStorage.setItem("name",username);
    }
    if(password.trim()===""){
        
        document.getElementById("err1").innerHTML = "Required!";
        document.getElementById("password").style.border = "1px solid red";
        return;
    }else {
        document.getElementById("err1").innerHTML = "";
        document.getElementById("password").style.border = "0.5px solid grey";
        localStorage.setItem("password",password);
    }
    window.location.href = "dashboard.html";
}