// Assuming you have a list of searchable items
let searchableItems = [
    { title: "Home", url: "index.html" },
    { title: "Electrical Concept", url: "Electrical.html" },
    { title: "Electronic Concept", url: "Electronic.html" },
    // Add more items as per your website structure
];

// Function to perform search
function performSearch(query) {
    query = query.toLowerCase().trim();
    let results = [];

    // Loop through searchable items and find matches
    searchableItems.forEach(item => {
        if (item.title.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    // Display search results
    displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
    // Clear previous results
    let resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = '';

    // Display results
    results.forEach(result => {
        let link = document.createElement("a");
        link.href = result.url;
        link.textContent = result.title;
        link.classList.add("search-result"); // Optional: Add a class for styling

        resultsContainer.appendChild(link);
    });

    // If no results found
    if (results.length === 0) {
        let noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No results found.";
        resultsContainer.appendChild(noResultsMessage);
    }
}

// Event listener for form submission
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let query = document.getElementById("searchInput").value;
    performSearch(query);
});
