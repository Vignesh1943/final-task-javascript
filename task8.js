fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        let output = document.querySelector(".api");

        // 1. Display only product title inside h1
        products.forEach(product => {
            console.log(`<h1>${product.title}</h1>`);
        });

        // 2. Display product ID and title inside h2
        products.forEach(product => {
            console.log(`<h2>${product.id} - ${product.title}</h2>`);
        });

        // 3. First 30 characters of each title
        products.forEach(product => {
            console.log(product.title.slice(0, 30));
        });

        // 4. First 100 characters of description
        products.forEach(product => {
            console.log(product.description.slice(0, 100));
        });

        // 5. Display image inside div
        products.forEach(product => {
            console.log(`<div><img src="${product.image}"></div>`);
        });

        // 6. Title, description and image inside one div
        products.forEach(product => {
            console.log(`
                <div>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <img src="${product.image}">
                </div>
            `);
        });

        // 7. Display price inside p tag
        products.forEach(product => {
            console.log(`<p>${product.price}</p>`);
        });

        // 8. Display category inside h3
        products.forEach(product => {
            console.log(`<h3>${product.category}</h3>`);
        });

        // 9. Display title in uppercase
        products.forEach(product => {
            console.log(product.title.toUpperCase());
        });

        // 10. Title and total character count
        products.forEach(product => {
            console.log(product.title, product.title.length);
        });

        // 11. Display first 5 products only
        products.slice(0, 5).forEach(product => {
            console.log(product.title);
        });

        // 12. Display IDs, titles and prices
        products.forEach(product => {
            console.log(product.id, product.title, product.price);
        });

        // 13. Display image with width 200px
        products.forEach(product => {
            console.log(`<img src="${product.image}" width="200px">`);
        });

        // 14. Separate div with class card
        products.forEach(product => {
            console.log(`
                <div class="card">
                    <h2>${product.title}</h2>
                </div>
            `);
        });

        // 15. Title and description limited to 50 characters
        products.forEach(product => {
            console.log(`
                <h2>${product.title}</h2>
                <p>${product.description.slice(0, 50)}</p>
            `);
        });

        // 16. Display all titles in console and webpage
        products.forEach(product => {
            console.log(product.title);
        });

        // 17. Title and category inside same div
        products.forEach(product => {
            console.log(`
                <div>
                    <h2>${product.title}</h2>
                    <h3>${product.category}</h3>
                </div>
            `);
        });

        // Display all products on webpage
        output.innerHTML = products.map(product => `
            <div class="card">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}" width="200px">
                <h3>${product.category}</h3>
                <p>Price: $${product.price}</p>
            </div>
        `).join("");

        // 18. Message after API data successfully loaded
        console.log("API data successfully loaded");

    })

    .catch(error => {
        console.log("Error:", error);
    })

    // 19. Loading message and 20. Finally message
    .finally(() => {
        console.log("API request completed");
    });