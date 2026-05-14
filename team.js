
let addBtn = document.getElementById("addBtn");

addBtn.onclick = function(){

    window.location.href = "addmember.html";

};

let defaultMembers = [

    {
        initials:"ST",
        color:"#e6c36a",
        name:"Sivatheerdha CA",
        role:"Creative Director",
        email:"sivatheerdha@gmail.com",
        status:"Active"
    },

    {
        initials:"VR",
        color:"#8cc7ff",
        name:"Vyshnavi Ranjith",
        role:"Lead UI/UX",
        email:"vyshnaviranjith@gmail.com",
        status:"Active"
    },

    {
        initials:"AL",
        color:"#ff8fd2",
        name:"Alien Lakshmi C",
        role:"Brand Strategist",
        email:"alienlakshmi@gmail.com",
        status:"On Leave"
    },

    {
        initials:"DJ",
        color:"#8cc7ff",
        name:"Devananda JA",
        role:"Brand Strategist",
        email:"devananda@gmail.com",
        status:"Active"
    }

];

localStorage.setItem(
    "teamMembers",
    JSON.stringify(defaultMembers)
);

let members = JSON.parse(localStorage.getItem("teamMembers"));
if(!members){

    members = defaultMembers;

    localStorage.setItem(
        "teamMembers",
        JSON.stringify(defaultMembers)
    );

}
let table = document.getElementById("teamTable");

function displayMembers(){

    table.innerHTML = "";

    for(let i=0; i<members.length; i++){

        let statusClass;

        if(members[i].status === "Active"){

            statusClass = "active-status";

        }
        else{

            statusClass = "leave";

        }

        table.innerHTML += `

        <tr>

            <td>

                <div class="member">

                    <div class="circle"
                    style="background:${members[i].color};">

                    ${members[i].initials}

                    </div>

                    ${members[i].name}

                </div>

            </td>

            <td>${members[i].role}</td>

            <td>${members[i].email}</td>

            <td>

                <span class="status ${statusClass}">
                    ${members[i].status}
                </span>

            </td>

        </tr>

        `;

    }

}

displayMembers();
