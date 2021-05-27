window.addEventListener('load', (e) => {
    let width = 800;
    let height = 700;
    window.resizeTo(width, height);
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

    const $ = (id) => {
        return document.getElementById(id);
    };

    $('cancel').addEventListener('click', () => {
        window.close();
    });
    function ValidateEmail(email) {  
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(custForm.email.value)) {
        return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
        }
    function phonenumber(inputtxt) {
        let phoneno = /^\d{10}$/;
        if((inputtxt.value.match(phoneno))) {
            return true;
            } else {
            alert("message");
            return false;
            }
        };

    $('custForm').addEventListener('submit', (e) => {
        e.preventDefault();

        let name = `Name: ${$('name').value}`;
        let address_type = `Address Type: ${$('address_type').value}`;
        let address = `Street Address: ${$('address').value}`;
        let city = `City: ${$('city').value}`;
        let state = `State: ${$('state').value}`;
        let zip = `Zip code: ${$('zip').value}`;
        let phone = `Phone Number: ${$('phone').value}`;
        let email = `Email: ${$('email').value}`;

        let parent = window.opener.document.getElementById('loginDetails');
        parent.innerHTML = `${name}<br>${address_type}<br>${address}<br>${city}<br>${state}<br>${zip}<br>${phone}<br>${email}`;

        window.close();
    });
});