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
    function validateEmail(email) {  
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(custForm.email.value)) {
        return true;
        }
        alert("You have entered an invalid email address!")
        return false
        }
    function validatePhone(phone) {
        if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(custForm.phone.value)) {
            return true;
            }
            alert("You have entered an invalid phone number!")
            return false
            }
    function validateZip(zip) {
        if (/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(custForm.phone.value)) {
            return true;
            }
            alert("You have entered an invalid phone number!")
            return  false
            }
      

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
        validateEmail (email);
        let parent = window.opener.document.getElementById('loginDetails');
        parent.innerHTML = `${name}<br>${address_type}<br>${address}<br>${city}<br>${state}<br>${zip}<br>${phone}<br>${email}`;
    
        window.close();
    });
});