//get data
const NameInput = document.querySelector("#name");
const Email = document.querySelector("#email");
const Message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//data validation
function validateform(){

    clearMessages();
    let errorflag = false;


    if(NameInput.value.length < 1){
        errorNodes[0].innerText = "Please fill out this feild.";
        NameInput.classList.add("error-border");
        errorflag = true;
    }

    if(!EmailIsValid(Email.value)){
        errorNodes[1].innerText = "Invalid email.";
        Email.classList.add("error-border");
        errorflag = true;
    }

    if(Message.value.length < 1){
        errorNodes[2].innerText = "Please enter some message.";
        Message.classList.add("error-border");
        errorflag = true;
    }

    if(!errorflag){
        success.innerText = "Message Sent!!";
    }

}

//error clear / success message
function clearMessages(){
    for(let i = 0; i< errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    success.innerText="";
    NameInput.classList.remove("error-border");
    Email.classList.remove("error-border");
    Message.classList.remove("error-border");
}

//checking if email is valid or not
function EmailIsValid(Email){
    let pattern = /\S+@\S+.\S+/;
    return pattern.test(Email);
}