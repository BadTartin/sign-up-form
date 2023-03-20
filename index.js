
function passCheck() {
    var x = document.getElementById("password");
    var y = document.getElementById("password_con");
    var errormsg = document.getElementById("errormsg");
    if (x.value === y.value) {
        // x.style.border = "1px solid blue";
        // y.style.border = "1px solid blue";
        y.setCustomValidity("");
        x.setCustomValidity("");
        errormsg.style.color = "rgba(255, 0, 0, 0)";
    } else {
        // display error message
        // x.style.border = "1px solid red";
        // y.style.border = "1px solid red";
        // alert("Passwords do not match");
        y.setCustomValidity("Passwords do not match");
        x.setCustomValidity("Passwords do not match");
        errormsg.style.color = "rgba(255, 0, 0, 1)";

    }
}
