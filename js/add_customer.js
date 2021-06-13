window.addEventListener('load', (e) => {
    let width = 875;
    let height = 700;
    window.resizeTo(width, height);
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
    
    document.querySelector('#name').focus();

    const $ = (id) => {
        return document.getElementById(id);
    };

    $('cancel').addEventListener('click', () => {
        alert('You need to complete your delivery information before placing your order. Are you sure you want to cancel?');
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
        if (/^[A-Za-z]{2}$/i.test(custForm.state.value)) {
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
        if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(custForm.zip.value)) {
            return true;
        } else {
            alert("You entered an invalid zip format!");
            return  false;
        }
    }
    $('custForm').addEventListener('submit', (e) => {
        e.preventDefault();

        let entryIsValid = true;
        
        let name = $('name').value;
        let address_type = $('address_type').value;
        let address = $('address').value;
        let city = $('city').value;
        let state = $('state').value;
        let zip = $('zip').value;
        let phone = $('phone').value;
        let email = $('email').value;

        let name_formattedString = `Name: ${name}`;
        let address_type_formattedString = `Type: ${address_type}`;
        let address_formattedString = `Address: ${address}`;
        let city_formattedString = `City: ${city}`;
        let state_formattedString = `State: ${state}`;
        let zip_formattedString = `Zip code: ${zip}`;
        let phone_formattedString = `Phone: ${phone}`;
        let email_formattedString = `Email: ${email}`;

        if (validateName(name) === false) {
            document.getElementById('name').focus();
            entryIsValid = false;
        }
        
        if (validateAddress(address) === false) {
            document.getElementById('address').focus();
            entryIsValid = false;
        }

        if (validateCity(city) === false) {
            document.getElementById('city').focus();
            entryIsValid = false;
        }

        if (validateState(state) === false) {
            document.getElementById('state').focus();
            entryIsValid = false;
        }

        if (validateZip(zip) === false) {
            document.getElementById('zip').focus();
            entryIsValid = false;
        }

        if (validatePhone(phone) === false) {
            document.getElementById('phone').focus();
            entryIsValid = false;
        }
      
        if (validateEmail(email) === false) {
            document.getElementById('email').focus();
            entryIsValid = false;
        } 

        // let parent = window.opener.document.getElementById('loginDetails');
        // parent.innerHTML = `${name}<br>${address_type}<br>${address}<br>${city}<br>${state}<br>${zip}<br>${phone}<br>${email}`;

        if (entryIsValid) {
            let arrCust = [name, address_type, address, city, state, zip, phone, email];
            localStorage.setItem('custForm', JSON.stringify(arrCust));

            window.close();
        }
    });

});

