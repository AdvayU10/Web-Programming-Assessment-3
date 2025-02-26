document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // get input for weight and height
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    // calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // display result
    const resultDiv = document.getElementById('result');
    let message = '';

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi} - Underweight`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `Your BMI is ${bmi} - Healthy`;
    } else if (bmi >= 25 && bmi < 29.9) {
        message = `Your BMI is ${bmi} - Overweight`;
    } else {
        message = `Your BMI is ${bmi} - Obesity`;
    }

    resultDiv.textContent = message;
});

// Displaying BMI info
document.getElementById('infoBtn').addEventListener('click', function() {
    const infoDiv = document.getElementById('bmiInfo');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
        infoDiv.innerHTML = `
            <p>Body Mass Index (BMI) is a measure of body fat based on height and weight. It is calculated by dividing an individual's weight in kilograms by the square of their height in meters.</p>
            <p><strong>BMI Categories:</strong></p>
            <ul style="text-align: left;">
                <li>Underweight: BMI < 18.5</li>
                <li>Healthy Weight: BMI 18.5 - 24.9</li>
                <li>Overweight: BMI 25 - 29.9</li>
                <li>Obesity: BMI ≥ 30</li>
            </ul>
            <p>Note: BMI is a screening tool and doesn't directly measure body fat. Results may vary based on age, gender, and muscle mass.</p>
        `;
        this.textContent = 'Hide BMI Info';
    } else {
        infoDiv.style.display = 'none';
        this.textContent = 'Read about BMI';
    }
});