// step:1 add click event handler with the login button
document.getElementById('btn').addEventListener('click',function(){
    // step-2 : get the email address inside the email input field
    // remember to use .value to get text form an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    // step-3: get the password
    // 3.a set the id an html password input field
    // 3.b get the element
    // 3.c get the value form an element

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    // step-4: verfiy email and password

    if(email === 'rayonridu9@gmail.com' && password === 'ridoy12345'){
        window.location.href = 'bank.html';
    }
    else{
        // console.log('invalid user')
        alert('Forgotten Password?')
    }

})