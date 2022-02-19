

const accounts = JSON.parse(localStorage.getItem("accounts")) || []

document.getElementById("validation").addEventListener('click', function () {
    var foundUserName = false,
        foundPassword = false
   
    if (document.getElementById("username").value == "") {
        document.getElementById("emptyusername").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
        document.getElementById("invalidaccount").innerHTML = ""
    }
    else {
        for (var i = 0; i < accounts.length; i++) {
            if (document.getElementById("username").value == accounts[i].username) {
                foundUserName = true;
                break;
            }
        }
    }

    if (document.getElementById("password").value == "") {
        document.getElementById("emptypassword").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
        document.getElementById("invalidaccount").innerHTML = ""
    }
    else {
        for (var i = 0; i < accounts.length; i++) {
            if (document.getElementById("password").value == accounts[i].password) {
                foundPassword = true;
                break;
            }
        }
    }

    if (foundUserName == true || document.getElementById("username").value != "") {
        document.getElementById("emptyusername").innerHTML = ""
    }
    if (foundPassword == true || document.getElementById("password").value != "") {
        document.getElementById("emptypassword").innerHTML = ""
    }

    if (foundUserName == true && foundPassword == true) {
        localStorage.setItem("document.getElementById('user')", document.getElementById("username").value)
        location.href = "jewellery.html"

    }
    else if (document.getElementById("username").value != "" && document.getElementById("password").value != "") {
        document.getElementById("invalidaccount").innerHTML = "<span style='color:white;font-size:26px '> " + "\u26A0" + "</span>" + "<span style='color:white;font-size:13px '> " + "    Unrecognized username or password." + "</span>"
        document.getElementById("emptyusername").innerHTML = ""
        document.getElementById("emptypassword").innerHTML = ""
    }
});


document.getElementById("password").addEventListener('keyup', function () {
    if (document.getElementById("password").value === "") {
        document.getElementById("eye").style.visibility = "hidden"
    }
    else {
        document.getElementById("eye").style.visibility = "visible"
    }
});

document.getElementById("eye").addEventListener('click', function () {
    if (document.getElementById("password").type === "password") {
        document.getElementById("password").type = "text"
        document.getElementById("eye").classList.toggle('bi-eye')
    }
    else {
        document.getElementById("password").type = "password"
        document.getElementById("eye").classList.toggle('bi-eye')
    }
});

