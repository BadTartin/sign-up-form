
function passCheck() {
    var x = document.getElementById("password");
    var y = document.getElementById("password_con");
    if (x.value === y.value) {
        x.style.border = "1px solid blue";
        y.style.border = "1px solid blue";
        console.log(x);
    } else {
        // display error message
        x.style.border = "1px solid red";
        y.style.border = "1px solid red";
    }
}

console.log('hello')
// console.log(passwd)