const individualRadio = document.getElementById('individual');
const instituteRadio = document.getElementById('institute');
const individualFields = document.querySelector('.individual-fields');
const instituteFields = document.querySelector('.institute-fields');
const individualFields2 = document.querySelector('.individual-fields-2');
const instituteFields2 = document.querySelector('.institute-fields-2');

// Function to show individual fields and hide institute fields
function showIndividualFields() {
    individualFields.style.display = 'flex';
    individualFields2.style.display = 'flex';
    instituteFields.style.display = 'none';
    instituteFields2.style.display = 'none';
  }
  
  // Function to show institute fields and hide individual fields
  function showInstituteFields() {
    instituteFields.style.display = 'flex';
    instituteFields2.style.display = 'flex';
    individualFields.style.display = 'none';
    individualFields2.style.display = 'none';
  }


individualRadio.addEventListener('change', showIndividualFields);
instituteRadio.addEventListener('change', showInstituteFields);

showIndividualFields();