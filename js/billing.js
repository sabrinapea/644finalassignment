
let myCheck = document.getElementById('myCheck');

myCheck.addEventListener('click', (e) => {
    let userName = document.querySelector('#name');
    let userAddressType = document.querySelector('#address_type');
    let userAddress = document.querySelector('#address');
    let userCity = document.querySelector('#city');
    let userState = document.querySelector('#state');
    let userZip = document.querySelector('#zip');
    let arrCust;

    if (localStorage.getItem('custForm') !== null) {
        arrCust = JSON.parse(localStorage.getItem('custForm'));
        
    } else {
        console.log("could not find local data");
        return;

    }

userName.value = arrCust[0];
userAddress.value = arrCust[2];
userCity.value = arrCust[3];
userState.value = arrCust[4];
userZip.value = arrCust[5];

});
