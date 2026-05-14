

function sendMessage(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let project = document.getElementById("project").value;

    let message = document.getElementById("message").value;



    if(name == ""){

        alert("Please enter your name");

        return;

    }



    if(email == ""){

        alert("Please enter your email");

        return;

    }



    if(project == ""){

        alert("Please select project type");

        return;

    }



    if(message == ""){

        alert("Please enter your message");

        return;

    }



    alert("Message Sent Successfully!");

}
