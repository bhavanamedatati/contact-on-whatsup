var number, message;

function sendMsg(){
    number = document.getElementById("num").value;
    message = document.getElementById("msg").value;

    try{
        window.open("https://wa.me/" + number + "?text=" + message, "_blank").focus();
    }
    catch(err){
        window.location.assign("https://wa.me/" + number + "?text=" + message, "_blank");
    }
}


