const bar = document.querySelector('.bar');
const navLinks = document.querySelector('nav ul');

bar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
var typed = new Typed('.text', {
    strings:[ "Frontend Developer","UX Designer","Web Developer"],
    typeSpeed: 100,
    BackaDelay:1000, 
    loop:true

  });

//   function emailsend() {
//     var Username = document.querySelector(".name").value;
//     var Email = document.querySelector(".email").value;
//     var message=document.querySelector(".msg").value;


//     var msgbody ="name :" + Username +
//     "<br/> email :" + Email +
//     "<br/> message :" + message;


//     Email.send({
//         Host : "smtp.mailendo.com",
//         Username : "s2121320145@gmail.com",
//         Password : "91FFB72E9C788B4F556F9EF50E356E782591",
//         To : 's2121320145@gmail.com',
//         From : "biswajitsahu1472@gmail.com",
//         Subject : "This is the subject",
//         Body : msgbody
//     }).then(
//       message => alert(message)
//     );
    
//   }
emailjs.init("EwbAk3Z4KaGleORib");


function emailsend() {
    var Username = document.querySelector(".name").value;
    var Email = document.querySelector(".email").value;
    var message = document.querySelector(".msg").value;

    var msgbody = `Name: ${Username} <br/> Email: ${Email} <br/> Message: ${message}`;

    emailjs.send("service_zx8efg5", "template_a0i6qjc", {
        from_name: Username,
        from_email: Email,
        message: message
    }).then(
        function(response) {
            alert("Email sent successfully!");
        },
        function(error) {
            alert("Failed to send email: " + error.text);
        }
    );
}
