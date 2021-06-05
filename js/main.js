window.addEventListener('load', () => {
    document.getElementById('btnAddCustomer').addEventListener('click', () => {
        window.open('add_customer.html','','width=800,height=600');
    });
});
window.addEventListener('load', () => {
    document.getElementById('submitOrder').addEventListener('click', () => {
        alert("Are you sure your pizza selection are correct?");
        window.open('billing.html','','width=800,height=600');
    });
});
// window.addEventListener('load', () => {
//     document.getElementById('cancelOrder').addEventListener('click', () => {
//         alert("Are you sure you want to cancel your order?");
//         // window.open('billing.html','','width=800,height=600');
//     });
// });