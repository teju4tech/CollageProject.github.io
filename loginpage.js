var form = document.forms["frm"]

form.onsubmit = function(e) {
    e.preventDefault();
    if (form.user.value == "username" && form.pass.value == "lab2user") {

        window.open("DemoHOme.html");
    } else {
        alert("account doesn't exist")
        alert("Please Enter correct password")
        alert("If you face any problem ")
        alert("click the blue button")
        alert("Thank you")
    }

}