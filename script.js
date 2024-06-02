let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function Send(){
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Phnnum").value;
    var subject = document.getElementById("Subject").value;
    var message = document.getElementById("Message").value;
o
    var body = "Name:" + name + "<br> Email:" + email + "<br> Contact Number:" + contact + "<br> Subject:" + subject + "<br> Message:" + message;
    console.log(body);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sudeep.sth90s@gmail.com",
        Password : "CA61DF335039FB24C99231FADB2E0F38E8EA",
        To : 'sudeep.sth90s@gmail.com',
        From : "sudeep.sth90s@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}