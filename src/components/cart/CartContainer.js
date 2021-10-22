import React, { useEffect, useState } from 'react';
import './cartContainer.scss';
const CartContainer = () => {
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
	console.log('cart', cart);
	return (
		<div className="Cart">
            total: {cart.length}
			{cart.map((item) => {
				return <div key={item.id}>{item.title}</div>;
			})}
		</div>
	);
};
export default CartContainer;
