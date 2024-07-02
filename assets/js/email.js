const form = document.querySelector("form");
const fullName = document.getElementById("name");
const message = document.getElementById("message");

function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "amirkhan24mak@gmail.com",
        Password : "7B03A3854BA9415BBB1A1D1759DB0F3F9338",
        To : 'amirkhan24mak@gmail.com',
        From : 'amirkhan24mak@gmail.com',
        Subject : "Portfolio",
        Body : message.value
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sendEmail();

})