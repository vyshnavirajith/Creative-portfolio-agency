const form = document.getElementById("projectForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        if(form.checkValidity()){

            alert("Project Saved Successfully");

            form.reset();

        }
        else{

            alert("Please fill all fields");

        }

    });

}
