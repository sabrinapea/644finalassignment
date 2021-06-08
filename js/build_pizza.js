const $ = (id) => {
    return document.getElementById(id);

};

let userCheese = document.querySelector('#selectcheese');
let userDough = document.querySelector('#selectdough');
let userSize = document.querySelector('#selectsize');
let userSauce = document.querySelector('#selectsauce');
let userToppings = document.querySelector('#selecttoppings');
let userButton = document.querySelector('#buttons');
let total = 0;

// validate dough and size are clicked before proceeding
let validateDoughAndSize = function (e) {
    // validating dough
    let selectDoughIsValid = false;
    if (document.getElementById('handtossed').checked ||
        document.getElementById('thincrust').checked ||
        document.getElementById('nystyle').checked ||
        document.getElementById('gluten').checked) {
        selectDoughIsValid = true;
        // alert('you are valid');
    }
    let selectSizeIsValid = false;
    if (document.getElementById('size').options[document.getElementById('size').selectedIndex].value != "notvalid") {
        selectSizeIsValid = true;      
    }
    if (selectDoughIsValid && selectSizeIsValid) {
        userCheese.style.visibility="visible";
        userSauce.style.visibility="visible";
        userToppings.style.visibility="visible";
        userButton.style.visibility="visible";
        document.getElementById('runningtotal').style.visibility="visible";
    }  
}
userDough.addEventListener('click', validateDoughAndSize);
userSize.addEventListener('click', validateDoughAndSize);

let calculateTotal = function (e) {
    total = 0;

    // Get added price from pizza size
    let sizeAmount = parseFloat(document.getElementById('size').options[document.getElementById('size').selectedIndex].value);
    total += isNaN(sizeAmount) ? 0 : sizeAmount; 

    // Get added price from cheese type
    let cheeseAmount = parseFloat(document.getElementById('cheese').options[document.getElementById('cheese').selectedIndex].value);
    total += isNaN(cheeseAmount) ? 0 : cheeseAmount; 

    // Get added price from sauce type
    let sauceAmount = parseFloat(document.getElementById('sauce').options[document.getElementById('sauce').selectedIndex].value);
    total += isNaN(sauceAmount) ? 0 : sauceAmount; 

    // Get the pricing from the added toppings
    let toppingAmount = 0;
    let checkboxes = document.getElementsByClassName('toppingcheckbox');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            toppingAmount += 0.99;
        }
    } 
    total += toppingAmount;

    document.getElementById('runningtotal').innerHTML = "$" + total.toFixed(2);
   
}
userCheese.addEventListener('click', calculateTotal);
userSauce.addEventListener('click', calculateTotal);
userToppings.addEventListener('click', calculateTotal);
userDough.addEventListener('click', calculateTotal);
userSize.addEventListener('click', calculateTotal);

let doughBtns = document.getElementsByClassName('dough');

function buildPizzaSizeDropDown(e) {
    switch (e.target.id) {
        case "handtossed":
            document.getElementById('size').innerHTML = `
            <option value="notvalid" selected>Your HandTossed Pizza Size Options</option>
            <option value="9.99">Small ($9.99)</option>
            <option value="12.99">Medium ($12.99)</option>
            <option value="14.99">Large ($14.99)</option>
            `;
            break;
        case "thincrust":
            document.getElementById('size').innerHTML = `
            <option value="notvalid" selected>Your Thincrust Pizza Size Options</option>
            <option value="11.99">Medium ($11.99)</option>
            <option value="13.99">Large ($13.99)</option>
            `;      
            break;
        case "nystyle":
            document.getElementById('size').innerHTML = `
            <option value="notvalid" selected>Your New York Style Pizza Size Options</option>
            <option value="11.99">Medium ($11.99)</option>
            <option value="19.99">Extra Large ($19.99)</option>
            `;  
            break;
        case "gluten":
            document.getElementById('size').innerHTML = `
            <option value="notvalid" selected>Your Gluten Pizza Size Options</option>
            <option value="11.99">Medium ($11.99)</option>
            `;    
            break;
    }
}

for (let doughBtn of doughBtns) {
    doughBtn.addEventListener('click', buildPizzaSizeDropDown);
}

window.addEventListener('load', () => {
    document.getElementById('cancelOrder').addEventListener('click', () => {
        alert("Do you want to change your order?");
        total = 0;
        document.getElementById('runningtotal').innerHTML = "Your Total is: $" + total.toFixed(2);
       
       
        document.getElementById('size').selectedIndex = 0;
        // options[document.getElementById('size').selectedIndex].reset();
        document.getElementById('cheese').selectedIndex = 0;
        document.getElementById('sauce').selectedIndex = 0;
        
        let checkboxes = document.getElementsByClassName('toppingcheckbox');
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                checkbox.checked = false;
            } 

        }
        document.getElementById('size').innerHTML = '<option value="notvalid" selected>You must select your dough before proceeding</option>';

        userCheese.style.visibility="hidden";
        userSauce.style.visibility="hidden";
        userToppings.style.visibility="hidden";
        userButton.style.visibility="hidden";
        document.getElementById('runningtotal').style.visibility="hidden";
        
        document.getElementById('selectdough').focus();      
    });
});

