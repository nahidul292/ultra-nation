import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart= props.cart;
    const totalPopulation = cart.reduce( (sum,country)=> sum + country.population,0)
    // let totalPopulation = 0;
    // for (let i=0; i<cart.length; i++) {
    //     const element = cart[i];
    //     totalPopulation= totalPopulation + element.population;
    // }

    return (
        <div>
            <h3>Total Counties : {cart.length}</h3>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;