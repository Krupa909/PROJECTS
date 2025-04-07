// DOM Elements
const newsGrid = document.getElementById('news-grid');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const homeBtn = document.getElementById('home-btn');

// Sample News Data (for demonstration purposes)
const sampleArticles = [
    {
        title: "Breaking: Major earthquake hits California",
        description: "A powerful earthquake of magnitude 7.8 struck California this morning.",
        image: "https://via.placeholder.com/300x200?text=Earthquake+Image",
        url: "https://www.example.com/article1"
    },
    {
        title: "Tech Giants Reveal New Smartphones",
        description: "Apple and Samsung are launching their latest flagship smartphones this fall.",
        image: "https://via.placeholder.com/300x200?text=Tech+News+Image",
        url: "https://www.example.com/article2"
    },
    {
        title: "Olympics 2024: Who’s Competing?",
        description: "Find out the athletes who are expected to dominate the 2024 Summer Olympics.",
        image: "https://via.placeholder.com/300x200?text=Olympics+Image",
        url: "https://www.example.com/article3"
    }
];

// Function to render news articles dynamically
const renderNews = (articles) => {
    newsGrid.innerHTML = '';  // Clear the grid

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('col-md-4');
        
        articleElement.innerHTML = `
            <div class="card news-card">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
                </div>
            </div>
        `;
        newsGrid.appendChild(articleElement);
    });
};

// Initial render with sample data
renderNews(sampleArticles);

// Search functionality
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
        const filteredArticles = sampleArticles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) || 
            article.description.toLowerCase().includes(searchTerm)
        );
        renderNews(filteredArticles);
    } else {
        alert('Please enter a search term.');
    }
});

// Home button functionality to reset to original articles
homeBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderNews(sampleArticles);  // Reload original articles
});
