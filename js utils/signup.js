document.getElementById("email").addEventListener('keyup', function () {
    if (document.getElementById("email").value.indexOf("@") == -1 || document.getElementById("email").value.indexOf(".com") == -1) {
        document.getElementById("emptyemail").innerHTML = "<span style='color: red; font-size:14px '> " + "Email does not contain a valid email." + "</span>"
    }
    else {
        document.getElementById("emptyemail").innerHTML = ""
    }
});

document.getElementById("phone").addEventListener('keyup', function () {
    let x = document.getElementById("phone").value

    if (x.length != 11 || x[0] != 0 || x[1] != 1 || (x[2] != 1 && x[2] != 2 && x[2] != 0))
        document.getElementById("emptyphone").innerHTML = "<span style='color: red; font-size:14px '> " + "This number is not valid according to your country." + "</span>"
    else
        document.getElementById("emptyphone").innerHTML = ""
});

function rules() {
    document.getElementById("rules").innerHTML = "<span style = 'color:darkslategray ; font-size:12px ' >" + "Your password must have at-least 7 characters.<br>Your password must contain at - least 1 numeric character.<br>Spaces are not allowed in your password.<br>" + "</span>"
    let x = document.getElementById("password2").value
    if (x.length < 7 || x.indexOf(" ") != -1 || (x.indexOf(0) == -1 && x.indexOf(1) == -1 && x.indexOf(2) == -1 && x.indexOf(3) == -1 && x.indexOf(4) == -1 && x.indexOf(5) == -1 && x.indexOf(6) == -1 && x.indexOf(7) == -1 && x.indexOf(8) == -1 && x.indexOf(9) == -1)) {
        document.getElementById("emptypassword2").innerHTML = "<span style='color: red; font-size:14px '> " + "The password does not satisfy the password policies." + "</span>"
    }

    else {
        document.getElementById("emptypassword2").innerHTML = ""
    }
}
function add() {
    let x = document.getElementById("phone").value
    let y = document.getElementById("password2").value
    let existUserName = false

    if (document.getElementById("username2").value == "") {
        document.getElementById("emptyusername2").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("email").value == "") {
        document.getElementById("emptyemail").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("password2").value == "") {
        document.getElementById("emptypassword2").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("phone").value == "") {
        document.getElementById("emptyphone").innerHTML = "<span style='color: red; font-size:14px '> " + "This field must be not empty." + "</span>"
    }
    if (document.getElementById("username2").value != "" && document.getElementById("phone").value != "" && document.getElementById("email").value != "" && document.getElementById("email").value.indexOf("@") != -1 && document.getElementById("email").value.indexOf(".com") != -1 && document.getElementById("password2").value.trim() != "" && (x.length == 11 && x[0] == 0 && x[1] == 1 && (x[2] == 1 || x[2] == 2 || x[2] == 0)) && y.length >= 7 && y.indexOf(" ") == -1 && (y.indexOf(0) != -1 || y.indexOf(1) != -1 || y.indexOf(2) != -1 || y.indexOf(3) != -1 || y.indexOf(4) != -1 || y.indexOf(5) != -1 || y.indexOf(6) != -1 || y.indexOf(7) != -1 || y.indexOf(8) != -1 || y.indexOf(9) != -1)) {

        const acc = JSON.parse(localStorage.getItem("accounts")) || []

        for (var i = 0; i < acc.length; i++) {
            if (document.getElementById("username2").value == acc[i].username) {
                existUserName = true;
                break;
            }
        }

        if (existUserName) {
            document.getElementById("existusername").innerHTML = "<span style='color:white;font-size:26px '> " + "\u26A0" + "</span>" + "<span style='color:white;font-size:13px '> " + "    This user name already exists." + "</span>"
        }


        else {
            var accounts = JSON.parse(localStorage.getItem("accounts")) || []

            accounts.push({
                username: document.getElementById("username2").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password2").value,
                phone: document.getElementById("phone").value
            })
            localStorage.setItem("accounts", JSON.stringify(accounts))


            localStorage.setItem("document.getElementById('user')", document.getElementById("username2").value)
            location.href = "jewellery.html"
        }
    }
}

document.getElementById("password2").addEventListener('keyup', function () {
    if (document.getElementById("password2").value === "") {
        document.getElementById("eye2").style.visibility = "hidden"
    }
    else {
        document.getElementById("eye2").style.visibility = "visible"
    }
});

document.getElementById("eye2").addEventListener('click', function () {
    if (document.getElementById("password2").type === "password") {
        document.getElementById("password2").type = "text"
        document.getElementById("eye2").classList.toggle('bi-eye')
    }
    else {
        document.getElementById("password2").type = "password"
        document.getElementById("eye2").classList.toggle('bi-eye')
    }
});

