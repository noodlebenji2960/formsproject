function validatePassword(){

    let pass = document.getElementById('password').value;
    let confirm_pass = document.getElementById
    ('confirm_password').value;
    let passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}/.test(pass);
    
    if (passwordRegex === true){
        if (pass == confirm_pass && pass !== "") {
            document.getElementById('confirmMsg').style.color = 'green';
            document.getElementById('confirmMsg').textContent =
                'Password matched';
            document.getElementById('create').disabled = false;
            document.getElementById('create').style.opacity = (1);
        } else {
            document.getElementById('confirmMsg').style.color = 'red';
            document.getElementById('confirmMsg').textContent
              = 'Password confirmation doesn´t match';
            document.getElementById('create').disabled = true;
            document.getElementById('create').style.opacity = (0.4);
        }
    } else {
        document.getElementById('confirmMsg').style.color = 'red';
        document.getElementById('confirmMsg').textContent
          = "Password must be between 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number and one special character.";
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4)
    }
}

function wrongPassAlert(){
    if(document.getElementById("password").value != "" && document.getElementById("confirm_password").value != ""){
        alert("Your response is submitted")
    } else {
        alert ("You must enter and confirm your password.")
    } 
}