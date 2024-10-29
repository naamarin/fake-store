import Styles from './Books.module.css'
import React from 'react';

function Books() {
    fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('products-container');

            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                        <h2>${product.title}</h2>
                        <h4>${product.description}</h4>
                        <p>Price: $${product.price}</p>
                        <img src="${product.image}" alt="${product.title}" width="100">
                    `;
                container.appendChild(productDiv);
            });
        })



    return <><h1>Welcome to the Books Page</h1><div id="products-container" className={Styles.products}></div></>;
}

export default Books;
