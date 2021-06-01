const $ = (id) => {
    return document.getElementById(id);

};
// const doughType = {
//     HANDTOSSED: "handtossed",
//     THINCRUST: "thincrust",
//     NYSTYLE: "nystyle",
//     GLUTEN: "gluten",
// }
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
// if no dough was clicked but cheese or sauce was selected, then alert use they must select dough first
