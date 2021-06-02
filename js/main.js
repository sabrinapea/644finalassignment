window.addEventListener('load', () => {
    document.getElementById('btnAddCustomer').addEventListener('click', () => {
        window.open('add_customer.html','','width=800,height=600');
    });
});
window.addEventListener('load', () => {
    document.getElementById('submitOrder').addEventListener('click', () => {
        alert("Are you sure your pizza selection are correct?");
        window.open('running_total.html','','width=800,height=600');
    });
});