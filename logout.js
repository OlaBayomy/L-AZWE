if (localStorage.getItem("document.getElementById('user')") != "null")
    document.getElementById("user").innerHTML = "<i class='fas' style='color:#ffc64d' >&#xf2bd;</i>  " + " " + "<span class='dropdown'> <button style='text-decoration: none ; font-size:18px;color:black ' class='dropbtn'>" + localStorage.getItem("document.getElementById('user')") + "</button><span class='dropdown-content'> <a style='font-weight:normal' onclick='logout()' href='home.html'>Log out</a></span> </span> " + " " + "<i class='fas' style='color:#ffc64d' >&#xf107;</i>"

function logout() {
    localStorage.setItem("document.getElementById('user')", null)
    localStorage.setItem("cart", 0)
}


let cart = JSON.parse(localStorage.getItem("cart"))
if (cart) {
    document.getElementById("cart").innerHTML = cart
}
else {
    document.getElementById("cart").innerHTML = 0
}

function refresh()
{  
    localStorage.setItem("cart", cart + 1)
    document.getElementById("cart").innerHTML = cart
    location.reload(true);   
}
