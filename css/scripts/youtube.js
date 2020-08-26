function setNewImage(x){
    x.style.width="200px";
    x.style.height="200px";
}
function setOldImage(x){
    x.style.width="80px";
    x.style.height="80px";
}


setInterval(displayclock, 500);
function displayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en = 'AM';

    if (hrs > 12){
        en = 'PM'
    }
    /*if (hrs > 12){
        hrs = hrs - 12;
    }
    if (hrs == 0){
        hrs = 12;
    }
    if (hrs < 10){
        hrs = '0' + min;
    }
    if (sec < 10){
        sec = '0' + sec;
    }*/
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec + ' ' + en;
}

// Image or Video Section
function MyVideoError(){
    alert("Video Unable to Load");
    alert("Check Internet Connectivity");
}

document.getElementById("home").onclick = abc;
function abc(){
    document.getElementById("home").alert("go to home");
}

function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
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
    alert("Form Submitted Successfully !")
    return true;

}

function focusFunction(element){
    element.style.background = "#f3a4a4";
}

function blurFunction(element){
    element.style.background = "";
}

function inputFunction(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function changeFunction(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function selectFunction(){
    alert("Text Selection Not Alowed");
}

function subscribe(){
    document.getElementById("button").innerHTML;
    alert("Subscribed Successfully");
}

