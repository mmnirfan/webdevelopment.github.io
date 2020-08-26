function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px"

    if(firstname.length < 5){
        text = "Please Enter Valid First Name";
        error_message.innerHTML = text;
        return false;
    }

    if(lastname.length < 5){
        text = "Please Enter Valid Last Name";
        error_message.innerHTML = text;
        return false;
    }

    if(password.length < 10){
        text = "Please Enter Correct Password";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(address.length >= 140){
        text = "Please Enter More than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully !")
    return true;

}
function selectFunction(){
    alert("Text Selection Not Alowed");
}