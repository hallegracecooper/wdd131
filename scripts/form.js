document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate product options
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Review submission counter using localStorage
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent form from submitting to demonstrate functionality
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Review submitted! You have submitted ${reviewCount} review(s).`);

        // Redirect to review.html after successful submission (uncomment for production use)
        // window.location.href = 'review.html';
    });
});
