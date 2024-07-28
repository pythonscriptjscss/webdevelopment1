document.getElementById('name').addEventListener('input', (e)=>{
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Za-z\s]/g, '');
});
document.getElementById('Rllno').addEventListener('input', (e)=>{
    let value = e.target.value;
    e.target.value = value.replace(/[^0-9]/g, '');
});
document.getElementById('AdharNO').addEventListener('input', (e)=>{
    let value = e.target.value;
    e.target.value = value.replace(/[^0-9]/g, '');
});


function validateForm() {
    // Additional validation can be added here if needed
    return true; // Return true to allow form submission
}