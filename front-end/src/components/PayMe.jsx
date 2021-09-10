import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PayMe = () => {
	const [product, setProduct] = useState({
		name: "tesla roadster",
		price: 50043.23,
	});
	async function handleToken(token) {
		// console.log(token, address);

		const response = await axios.post(
			"http://localhost:9000/api/v1/pay/checkout",
			{ token, product }
		);
		const { status } = response.data;
		if (status === "success") {
		} else {
		}
	}
	return (
		<div className="container">
			here
			<div className="product">
				<h1>{product.name}</h1>
				<h3> on sale ${product.price}</h3>
			</div>
			<StripeCheckout
				stripeKey="pk_test_51JX7hRHWCnAE4ORt0PA57S6hNjw1QWNDjLoOCghfvCYDqvoskdVhSnftOSPATfhkSh76E3mZlLDgWLOxZ7Z9LeUj00IQFccPtC"
				token={handleToken}
				billingAddress
				shippingAddress
				amount={product.price * 100}
				name={product.name}
			/>
		</div>
	);
};

export default PayMe;
