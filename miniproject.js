
let api = document.querySelector(".api");

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        api.innerHTML = "";

        products.forEach(function(product) {

            // Create separate card
            let card = document.createElement("div");

            // Add card content
            card.innerHTML = `
                <h2>Product ID: ${product.id}</h2>

                <h3>${product.title.slice(0, 50)}</h3>

                <p>Price: $${product.price}</p>

                <p>${product.description.slice(0, 100)}</p>

                <img src="${product.image}" width="200px">
            `;

            // Add card to webpage
            api.appendChild(card);

        });

    })
    .catch(function(error) {

        api.innerHTML = `<p style="color:red">
            Error loading products: ${error.message}
        </p>`;

    })
    .finally(function() {

        console.log("API request completed");

    });
