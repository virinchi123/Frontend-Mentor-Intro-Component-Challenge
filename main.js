const validation = () =>{
    const fname=document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    if(fname.length==0){
        document.getElementById("p1").style.display="block";
    }
    else {
        document.getElementById("p1").style.display = "none";
    }
    if (lname.length==0) {
        document.getElementById("p2").style.display = "block";
    }
    else {
        document.getElementById("p2").style.display = "none";
    }
    if ((email.length==0) || !validateEmail(email)) {
        document.getElementById("p3").style.display = "block";
    }
    else {
        document.getElementById("p3").style.display = "none";
    }
    if (pass.length==0) {
        document.getElementById("p4").style.display = "block";
    }
    else{
        document.getElementById("p4").style.display = "none";
    }

    console.log("clicked");

    console.log(pass.length)


}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
        return false;
    }

    return true;

}