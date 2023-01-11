var state = false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color="#7a797e"
        state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color="#5887ef"
        state=true;
    }
}





function validation(){
    var user = document.getElementById('username').value;
    var user1 = document.getElementById('username1').value;
    var mobileno = document.getElementById('numbermobile').value;
    var email = document.getElementById('emailid').value;
    var password = document.getElementById('password').value;
    
    var correct_way = /^[A-Za-z]+$/;

    // var correct_password = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    
    // var correct_password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    // var correct_password=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    

    // var correct_password = /(?=.*[!@#$%^&*])/

    if(user == ""){
        document.getElementById('usernameid').innerHTML=" ** please fill the firstname";
        return false;
    }

    if((user.length < 3) || (user.length > 20)){
        document.getElementById('usernameid').innerHTML=" ** please fill the firstname btw 3 and 20";
        return false;
    }
    
    if(user.match(correct_way))
    true;
    else{
        document.getElementById("usernameid").innerHTML="** only alphabets are allowed without any space";
        return false;
    }





    if(user1 == ""){
        document.getElementById('usernameid1').innerHTML=" ** please fill the lastname";
        return false;
    }

    if((user1.length < 3) || (user.length > 20)){
        document.getElementById('usernameid1').innerHTML=" ** please fill the lastname btw 3 and 20";
        return false;
    }

    if(user1.match(correct_way))
    true;
    else{
        document.getElementById("usernameid1").innerHTML="** only alphabets are allowed without any space";
        return false;
    }
   
   
   


    if(mobileno == ""){
        document.getElementById('mobilenumber').innerHTML=" ** please fill the mobile number";
        return false;
    }

    if(mobileno.length!=10){
        document.getElementById('mobilenumber').innerHTML=" ** mobile number should be 10 digits";
        return false;
    }
    
   if(isNaN(mobileno)){
    document.getElementById('mobilenumber').innerHTML=" ** mobile number should be contains only digits";
    return false;
   }



    if(email == ""){
        document.getElementById('emailids').innerHTML=" ** please fill the emailid";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('emailids').innerHTML=" ** Please fill the email id in a proper format @";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(
        email.length-4)!='.')){
            document.getElementById('emailids').innerHTML=" ** Please fill the email id in a proper format .";
            return false;
        }




        if(password == ""){
            document.getElementById('passwords').innerHTML=" ** please fill the password";
            return false;
        }

        if((password.length < 8) || (password.length > 20)){
            document.getElementById('passwords').innerHTML=" ** please fill the password minimum 8 character";
            return false;
        }
          
            // if(user.match(correct_password))
            // true;
            // else{
            //     document.getElementById("passwords").innerHTML="** password must have contain spacial character,numeric uppercase and lowercase value";
            //     return false;
            // }
        
}