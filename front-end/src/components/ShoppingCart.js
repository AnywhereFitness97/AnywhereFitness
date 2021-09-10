import axios from "axios";
import React, { useEffect, useState } from "react";
import shoppingCart from "./componentsIMGFiles/cart.png";
import { connect } from "react-redux";
import { isFetchingFalse } from "../actions/actions";

const ShoppingCart = (props) => {
	const [client, setClient] = useState([]);
	const [classesNull, setClassesNull] = useState([]);
	useEffect(() => {
		const userID = props.currentUser.userID;
		const UserId = {
			usersId: userID,
		};
		axios
			.post(
				"https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/client/listwitclassesattended",
				UserId
			)
			.then((res) => {
				const Code = res.data.code;
				if (Code === 101) {
					const List = res.data.ClassesAttendedNull;

					setClient(res.data.Client);
					setClassesNull(List);
				}
			})
			.catch((err) => console.log(err));
	}, [props]);
	return (
		<div className="shopping-cart-container">
			<div>
				<img id="cart" src={shoppingCart} alt="shoppingcart" />
			</div>
			<div>
				<p id="cartCount">{classesNull.length}</p>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {
	isFetchingFalse,
})(ShoppingCart);
