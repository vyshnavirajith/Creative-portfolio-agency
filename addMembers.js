

let submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let role = document.getElementById("role").value;

    let email = document.getElementById("email").value;

    let status = document.getElementById("status").value;



    if(name == ""){

        alert("Please enter member name");

        return;

    }



    if(role == ""){

        alert("Please enter role");

        return;

    }



    if(email == ""){

        alert("Please enter email");

        return;

    }



    if(status == ""){

        alert("Please select status");

        return;

    }



    let initials = name
    .split(" ")
    .map(function(word){

        return word[0];

    })
    .join("")
    .toUpperCase();



    let members =
    JSON.parse(localStorage.getItem("teamMembers")) || [];



    members.push({

        initials:initials,
        color:"#e6c36a",
        name:name,
        role:role,
        email:email,
        status:status

    });



    localStorage.setItem(
        "teamMembers",
        JSON.stringify(members)
    );



    alert("Member Added Successfully");



    window.location.href = "team.html";

};
