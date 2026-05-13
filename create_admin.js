

        function check(){

            let a=document.getElementById("fname").value
            let b=document.getElementById("lname").value
            let c=document.getElementById("email").value
            let d=document.getElementById("tel").value
            let e=document.getElementById("role").value
            let f=document.getElementById("address").value

            if(a=="" || b=="" || c=="" || d=="" || e=="" || f==""){
                alert("Fill all required fields")
            }

            else{
                window.location.href="dashboard.html"
            }
        }

    
