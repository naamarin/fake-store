import React from 'react';
import Styles from './Jewlery.module.css'

function Jewlery() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('products-container');
            console.log(data);
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = `${Styles.product}`
                productDiv.innerHTML = `
                        <h2>${product.title}</h2>
                        <h4>${product.description}</h4>
                        <p>Price: $${product.price}</p>
                        <img src="${product.image}" alt="${product.title}" width="100">
                        <p>Rate: ${product.rating.rate}</p>
                    `;
                container.appendChild(productDiv);
            });
        })



    return <><h1>Welcome to the Jewlery Page</h1><div id='products-container' className={Styles.products}></div></>;
}

export default Jewlery;
