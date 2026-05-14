

let submitBtn = document.getElementById("submitBtn");

function check(){



    let name = document.getElementById("name").value.trim();

    let role = document.getElementById("role").value.trim();

    let email = document.getElementById("email").value.trim();

    let status = document.getElementById("status").value;



    
    if(name == "" || role == "" || email == "" || status == ""){

        alert("Form is not filled");

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
