var btn = document.getElementById('button');
var form = document.getElementById('form');
var success = document.getElementById('success');
var dismiss = document.getElementById('dismiss');
var email = document.getElementById('email');
var errormsg = document.getElementById('errormsg')



function error(){
    email.style.backgroundColor="hsla(0, 100%, 92%, 0.925)"
errormsg.style.display='block';
email.style.color='hsl(4, 100%, 67%)';
window.alert('pls input a valid email')

}

btn.addEventListener('click', function(){
    var emailAddress = email.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailAddress.match(regex);

    if(isValid==null){
       error(); 
    }else{
        form.style.display = "none";
    success.style.display = "block";
    success.style.transition="display,1s"
    }


    
})

dismiss.addEventListener('click',function(){
   success.style.display = "none";
    form.style.display = "flex";
   form.style.transition="display,2s"

}
)
