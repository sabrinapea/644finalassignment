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
    
    function validateName(name) {
        if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(custForm.name.value)) {
            return true;
        } else {
            alert("You entered an invalid format, only enter your first and last name.");
            return false;
        }
    }
    function validateAddress(address) {
        // if (/^[A-Z]{1,6}[0-9]{1,2} ?[0-9][A-Z]{2}$/.test(custForm.address.value)) {/^[0-9]{1,6}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$/.
        if (/^\d+\s[A-z]+\s[A-z]+/g.test(custForm.address.value)) {
            return true;
        } else {
            alert("You entered an invalid address format!");
            return false;
        }
    }
    function validateCity(city) {
        if (/^[a-zA-Z',.\s-]{1,25}$/i.test(custForm.city.value)) {
            return true;
        } else {
            alert("You entered an invalid city format!");
            return false;
        }
    }
    function validateState(state) {
        if (/^[A-Za-z]{2,}$/i.test(custForm.state.value)) {
            return true;
        } else {
            alert("You entered an invalid state format!");
            return false;
        }
    }
    function validateEmail(email) {  
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(custForm.email.value)) {
            return true;
        } else {
            alert("You entered an invalid email address!");
            return false;
        }
    }
    function validatePhone(phone) {
        if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(custForm.phone.value)) {
            return true;
        } else {
            alert("You entered an invalid phone number!");
            return false;
        }
    }
    function validateZip(zip) {
        if (/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(custForm.zip.value)) {
            return true;
        } else {
            alert("You entered an invalid zip format!");
            return  false;
        }
    }
    

    $('custForm').addEventListener('submit', (e) => {
        e.preventDefault();

        let entryIsValid = true;
        let name = `Name: ${$('name').value}`;
        let address_type = `Type: ${$('address_type').value}`;
        let address = `Address: ${$('address').value}`;
        let city = `City: ${$('city').value}`;
        let state = `State: ${$('state').value}`;
        let zip = `Zip code: ${$('zip').value}`;
        let phone = `Phone: ${$('phone').value}`;
        let email = `Email: ${$('email').value}`;
        if (validateEmail(name) === false) {
            entryIsValid = false;
        }
        validateName (name);

        if (validateAddress(address) === false) {
            entryIsValid = false;
        }
        validateAddress (address);

        if (validateCity(city) === false) {
            entryIsValid = false;
        }
        validateCity(city);

        if (validateState(state) === false) {
            entryIsValid = false;
        }
        validateState(state);

        if (validateZip(zip) === false) {
            entryIsValid = false;
        }
        validateZip(zip);

        if (validatePhone(phone) === false) {
            entryIsValid = false;
        }
        validatePhone(phone);

        if (validateEmail(email) === false) {
            entryIsValid = false;
        }
        validateEmail (email);

        if (validateEmail(email) === false) {
            entryIsValid = false;
        }
        validateEmail (email);
        let parent = window.opener.document.getElementById('loginDetails');
        parent.innerHTML = `${name}<br>${address_type}<br>${address}<br>${city}<br>${state}<br>${zip}<br>${phone}<br>${email}`;
        document.querySelector('#custForm').reset();

    
        window.close();
    });
});