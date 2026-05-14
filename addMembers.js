

let submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(){

    let name = document.getElementById("name").value;

    let role = document.getElementById("role").value;

    let email = document.getElementById("email").value;

    let status = document.getElementById("status").value;

    if(name === "" || role === "" || email === ""){

        alert("Please fill all fields");

        return;

    }

    let initials = name
    .split(" ")
    .map(word => word[0])
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
