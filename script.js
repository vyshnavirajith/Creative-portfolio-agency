const form = document.getElementById("projectForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Project Saved Successfully");

        form.reset();

    });
}