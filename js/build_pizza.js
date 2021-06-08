const $ = (id) => {
    return document.getElementById(id);

};
// const doughType = {
//     HANDTOSSED: "handtossed",
//     THINCRUST: "thincrust",
//     NYSTYLE: "nystyle",
//     GLUTEN: "gluten",
// }

// if user select dough and size, else message must select both before proceeding. 
// const validateRadios = () => {
//    if (document.getElementById("selectdough").selectedIndex === 1) {
//             alert("you reached here and must select a size.");
//             return false;
//         }
//     }
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
    }

    
    
    // console.log(document.getElementById('size').options[document.getElementById('size').selectedIndex].value);

    
}
userDough.addEventListener('click', validateDoughAndSize);
userSize.addEventListener('click', validateDoughAndSize);

// userPizza.addEventListener('click', (e) => {
//     console.log('pie');
//     if (document.getElementById('selectdough').addEventListener('click', () => {
//         console.log('hello');
//         if (document.getElementById('selectsize').addEventListener('click', () => {
//             alert('you may proceed');
//         }));
//     }));
// });
    
//     // if(e.target.getElementsByClassName.contains('dough')) {
//     //     if(e.target.getElementById.contains('size')) {
//     //     console.log('you select both dough and size, you may proceed');
//     //     // proceed to select cheese option
//     //     } else {
//     //         console.log('you must select both dough and size, try again.');
//     //     }
//     // } else {
//     //     console.log('wrong');
        
//     }
// });

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
        document.querySelector('#buildingpizza').reset();
        document.querySelector('#handtossed').focus();      
    });
});

