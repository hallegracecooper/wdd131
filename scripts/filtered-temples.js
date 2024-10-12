console.log("Script is loaded correctly");

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "London England",
      location: "Newchapel, Surrey, England",
      dedicated: "2010, March, 29",
      area: 70000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-393730-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 11800,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
    }
  ];
  
  // Function to generate temple cards dynamically
function generateTempleCards(temples) {
    const templeContainer = document.createElement('div');
    templeContainer.classList.add('temple-cards-container');

    temples.forEach((temple) => {
        // Create a card container for each temple
        const card = document.createElement('div');
        card.classList.add('temple-card');

        // Create and append the temple name
        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        card.appendChild(templeName);

        // Create and append the temple location
        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        // Create and append the dedication date
        const dedication = document.createElement('p');
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        card.appendChild(dedication);

        // Create and append the area
        const area = document.createElement('p');
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        card.appendChild(area);

        // Create and append the image with lazy loading
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.width = 400;
        image.height = 250;
        image.loading = 'lazy';
        card.appendChild(image);

        // Append the card to the container
        templeContainer.appendChild(card);
    });

    // Append the container to the photo-holder div
    document.querySelector('.photo-holder').appendChild(templeContainer); 
}

// Call the function to generate the cards
generateTempleCards(temples);

// Function to display temple cards
function displayTemples(filteredTemples) {
    const photoHolder = document.querySelector('.photo-holder');
    photoHolder.innerHTML = ''; // Clear previous temple cards

    // Generate new cards for filtered temples
    filteredTemples.forEach((temple) => {
        // Create a card container for each temple
        const card = document.createElement('div');
        card.classList.add('temple-card');

        // Create and append the temple name
        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        card.appendChild(templeName);

        // Create and append the temple location
        const location = document.createElement('p');
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        // Create and append the dedication date
        const dedication = document.createElement('p');
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        card.appendChild(dedication);

        // Create and append the area
        const area = document.createElement('p');
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        card.appendChild(area);

        // Create and append the image with lazy loading
        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.width = 400;
        image.height = 250;
        image.loading = 'lazy';
        card.appendChild(image);

        // Append the card to the container
        photoHolder.appendChild(card);
    });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
    let filteredTemples;

    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'all':
        default:
            filteredTemples = temples; // Display all temples
            break;
    }

    displayTemples(filteredTemples); // Call function to display the filtered temples
}

// Event listeners for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const filterCriteria = event.target.getAttribute('data-filter');
        filterTemples(filterCriteria); // Call filter function with the selected criteria
    });
});

// Call the function to display all temples on initial load
displayTemples(temples);
