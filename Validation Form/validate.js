 var email=document.forms['form']['email'];
 var password=document.forms['form']['password'];

            var email_error=document.getElementById('email_error');
            var pass_error=document.getElementById('pass_error');

            email.addEventListener('textInput',email_Verify);
            password.addEventListener('textInput',pass_Verify);


            function validated()
            {
                if (email.value.length<9)
                {
                    email.style.border="2px solid red";
                    email_error.style.display="block";
                    email.focus();
                    return false;
                }
                if (password.value.length<5)
                {
                    password.style.border="2px solide red";
                    pass_error.style.display="block";
                    password.focus();
                    return false;
                }
            }
            function email_Verify()
            {
                if (email.value.length>9)
                {
                    email.style.border="2px solid blue";
                    email_error.style.display="none";
                    email.focus();
                    return false;
                }
            } 
            function pass_Verify()
            {
                
                 if (password.value.length>=5)
                {
                    password.style.border="2px solid blue";
                    pass_error.style.display="none";
                    password.focus();
                    return false;
                }
            }
                        

