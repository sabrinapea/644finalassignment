// $('pizzaform').addEventListener('click', (e) => {
//     e.preventDefault();

//     let handdough = `Dough selected: ${$('handtossed').value}`;
// }

// Add clicked items to have running total
function calculate_total() {
    let elem = document.getElementsById('selectsize');
    let total = 0;

    for (let i = 0; i < elem.length; i++) {
        total += parseInt(elem[i].value);
    }
    document.getElementById('').value = total;
    document.write('test');
}
calculate_total();

// Get DOM elements

// build the table when the id is clicked

// add options

// prevent submission

// get values from the clicked ids

// build the grid or table


