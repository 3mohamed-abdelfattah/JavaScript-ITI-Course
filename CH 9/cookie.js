function saveInfo() {
    //Persistent Cookie
    var date = new Date();

    if (document.getElementById("k").checked){
        date.setMonth(date.getMonth() + 6);

    }
    var valName = document.getElementById("name").value;
    var valEmail = document.getElementById("email").value;
    var valPassword = document.getElementById("password").value;
    document.cookie = "UserName=" + valName + ";expires=" + date;
    document.cookie = "UserEmail=" + valEmail + ";expires=" + date;
    document.cookie = "UserPassword=" + valPassword + ";expires=" + date;
}

function getAllCookies() {
    var splitCookie = document.cookie.split(";");
    var assoiativeCookie = [];
    for (i = 0; i < splitCookie.length; i++) {
        assoiativeCookie[splitCookie[i].split("=")[0].trim()] =
            splitCookie[i].split("=")[1];
    }
    return assoiativeCookie;
}

function displayGreeting() {
    var cookie = getAllCookies();
    var name = cookie["UserName"];
    var email = cookie["UserEmail"];
    var h1 = document.createElement("h1");
    document.body.appendChild(h1);

    var text = "Hello, " + name + " !" + "\n Your Email is " + email;

    h1.appendChild(document.createTextNode(text))
}