

        function check(){

            let a=document.getElementById("fname").value
            let b=document.getElementById("email").value
            let c=document.getElementById("tel").value

            if(a=="" || b=="" || c==""){

                alert("Fill all required fields")
            }

            else{

                alert("OTP sent to " + b)
            }
        }

        function login(){

            let o=document.getElementById("otp").value
            let c=document.getElementById("p").value
            let d=document.getElementById("cp").value

            if(o.length !== 6 || c !== d){

                alert("Invalid Details")
            }

            else{

                window.location.href="dashboard.html"
            }
        }

