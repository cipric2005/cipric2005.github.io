// form fields validation

function validateForm() {

    let nume=document.firstForm.nume.value;
      
    if (nume==null || nume=="") {
       alert("Please provide your name!");
       nume.focus();
       return false;
    }

    validateEmail();

    let subject=document.firstForm.subject.value;
      
    if (subject==null || subject=="") {
       alert("Please provide a subject!");
       subject.focus();
       return false;
    }

    let message=document.firstForm.text.value;
      
    if (message==null || message=="") {
       alert("Please provide a message!");
       message.focus();
       return false;
    }

    submitData();
}

// e-mail validation

function validateEmail()
{  
    let email=document.firstForm.email.value;  
    let atposition=email.indexOf("@");  
    let dotposition=email.lastIndexOf(".");  
    if (email==null || email=="" || atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {  
        alert("Please enter a valid e-mail!");  
        email.focus();
        return false;  
    }  
}

// collecting form data and converting it to string for sending to the server

function submitData()
{
    const contact = {nume: document.firstForm.nume.value, email: document.firstForm.email.value, subject: document.firstForm.subject.value, message: document.firstForm.text.value};
    const jsonContact = JSON.stringify(contact);

    console.log(document.firstForm.nume.value);
    console.log(document.firstForm.email.value);
    console.log(document.firstForm.subject.value);
    console.log(document.firstForm.text.value);

    console.log(jsonContact+'kskkdhhhf');
    alert("Your data was submitted!");
}