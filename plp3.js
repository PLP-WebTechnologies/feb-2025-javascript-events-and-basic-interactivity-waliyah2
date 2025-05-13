document.addEventListener('DOMContentLoaded', () => {
    // Interactive Image (Hover Effect)
    const mainImage = document.getElementById('mainImage');
    mainImage.addEventListener('mouseover', () => {
        mainImage.src = 'img2.jpg'; // Replace with your second image path
        mainImage.alt = 'Image 2';
    });
    mainImage.addEventListener('mouseout', () => {
        mainImage.src = 'img1.jpg'; // Replace with your first image path
        mainImage.alt = 'Image 1';
    });

    // Button Click
    const clickButton = document.getElementById('clickButton');
    const clickMessage = document.getElementById('clickMessage');
    let clickCount = 0;
    clickButton.addEventListener('click', () => {
        clickCount++;
        clickButton.textContent = `Clicked ${clickCount} times!`;
        clickMessage.textContent = "You clicked the button.";
    });

    // Basic Form Validation
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const formMessage = document.getElementById('formMessage');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (isValid) {
            formMessage.textContent = 'Form submitted successfully!';
            myForm.reset(); // Clear the form
        } else {
            formMessage.textContent = 'Please correct the errors.';
        }
    });
});
