// feedback.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const feedbackCountDisplay = document.getElementById('feedbackCountDisplay');
    const feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];

    // Display the current feedback count
    let feedbackCount = feedbackData.length;
    feedbackCountDisplay.textContent = `You have submitted feedback ${feedbackCount} time(s).`;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const exerciseRating = document.getElementById('exerciseRating').value;
        const nutritionRating = document.getElementById('nutritionRating').value;
        const waterIntake = document.getElementById('waterIntake').value;
        const successes = document.getElementById('successes').value;
        const improvements = document.getElementById('improvements').value;

        // Create a feedback object
        const feedbackEntry = {
            name,
            email,
            exerciseRating,
            nutritionRating,
            waterIntake,
            successes,
            improvements,
        };

        // Add feedback entry to the array
        feedbackData.push(feedbackEntry);
        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        // Update the feedback count
        feedbackCount++;
        localStorage.setItem('feedbackCount', feedbackCount);
        feedbackCountDisplay.textContent = `You have submitted feedback ${feedbackCount} time(s).`;

        // Personalized thank you message
        alert(`Thank you, ${name}! Your feedback has been recorded.`);

        // Optionally, clear the form fields
        form.reset();
    });
});

