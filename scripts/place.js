document.addEventListener('DOMContentLoaded', () => {
    // Update footer with last modified date
    const lastModified = new Date(document.lastModified).toLocaleDateString('en-US');
    document.getElementById('lastModified').textContent = lastModified;

    // Windchill Calculation
    const temperature = 18; // Static value in °C
    const windSpeed = 10; // Static value in km/h

    // Windchill calculation based on the conditions
    const calculateWindChill = (temp, wind) => {
        if (temp <= 10 && wind > 4.8) {
            // Metric formula for windchill in Celsius
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
        } else {
            return 'N/A'; // Return 'N/A' if conditions are not met
        }
    };

    // Call the function and update the DOM
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
});