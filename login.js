
        function check(){
            let a=document.getElementById("email").value
            let b=document.getElementById("password").value
            if (a==="" || b===""){
                alert("Enter valid username or password")
            }
            else{
                window.location.href="dashboard.html"
            }
        }
        function rme(){
            let a=document.getElementById("email").value
            let b=document.getElementById("password").value
            if (a==="" || b===""){
                alert("Enter username and password")
            }
            else{
                 alert("Username and password saved")
            }
        }
