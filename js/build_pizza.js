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
let selectdough = document.querySelector('#selectdough');
let selectsize = document.querySelector('#selectsize');
let selectsauce = document.querySelector('#selectsauce');
let selecttoppings = document.querySelector('#selecttoppings');

selectdough.addEventListener('click', (e) => {
    console.log('hello');
    
    if(e.target.className.contains('dough')) {
        if(e.target.getElementById.contains('size')) {
        console.log('you select both dough and size, you may proceed');
        } else {
            console.log('you must select both dough and size, try again.');
        }
    } else {
        console.log('wrong');
    }
});

let doughBtns = document.getElementsByClassName('dough');

function buildPizzaSizeDropDown(e) {
    switch (e.target.id) {
        case "handtossed":
            document.getElementById('size').innerHTML = `
            <option selected>Your HandTossed Pizza Size Options</option>
            <option value="1">Small ($9.99)</option>
            <option value="2">Medium ($12.99)</option>
            <option value="3">Large ($14.99)</option>
            `;
            break;
        case "thincrust":
            document.getElementById('size').innerHTML = `
            <option selected>Your Thincrust Pizza Size Options</option>
            <option value="1">Medium ($11.99)</option>
            <option value="2">Large ($13.99)</option>
            `;      
            break;
        case "nystyle":
            document.getElementById('size').innerHTML = `
            <option selected>Your New York Style Pizza Size Options</option>
            <option value="1">Medium ($11.99)</option>
            <option value="2">Extra Large ($19.99)</option>
            `;  
            break;
        case "gluten":
            document.getElementById('size').innerHTML = `
            <option selected>Your Gluten Pizza Size Options</option>
            <option value="1">Medium ($11.99)</option>
            `;    
            break;
    }
}
for (let doughBtn of doughBtns) {
    doughBtn.addEventListener('click', buildPizzaSizeDropDown);
}

