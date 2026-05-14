

function sendMessage(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let project = document.getElementById("project").value;

    let message = document.getElementById("message").value;



    if(name == "" || email == "" || project == "" || message == ""){

        alert("Please fill all the form fields");

        return;

    }



    alert("Message Sent Successfully!");

}
