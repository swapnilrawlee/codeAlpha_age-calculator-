function calcAge() {
    const bornAgeInput = document.getElementById('born_age');
    const tillDateInput = document.getElementById('tilldate');
    const ageResult = document.getElementById('age_result');

    // Get the selected dates from the input fields
    const bornAge = new Date(bornAgeInput.value);
    const tillDate = new Date(tillDateInput.value);

    // Calculate the difference in milliseconds
    const ageDiff = tillDate - bornAge;

    // Convert the difference to days
    const ageInDays = ageDiff / (1000 * 60 * 60 * 24);

    // Convert the difference to years
    const ageInYears = ageDiff / (1000 * 60 * 60 * 24 * 365.25);

    // Display the result in days and years
    ageResult.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years (${ageInDays.toFixed(0)} days).`;
}

// Add an event listener to the "CALCULATE AGE" button
const calculateButton = document.querySelector('button');
calculateButton.addEventListener('click', calcAge);
