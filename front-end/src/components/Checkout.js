import React, { useState, useEffect } from "react";

import * as yup from "yup";
import axios from "axios";
import { connect } from "react-redux";
import { isFetchingFalse, setClientClasses } from "../actions/actions";

const initialFormValues = {
	first_name: "",
	last_name: "",
	email: "",
	address: "",
	zip: "",
	city: "",
	state: "",
};

const initialFormErrors = {
	first_name: "",
	last_name: "",
	email: "",
	address: "",
	zip: "",
	city: "",
	state: "",
};
const FormSchema = yup.object().shape({
	first_name: yup.string().trim().required("First name is required"),
	last_name: yup.string().trim().required("Last name is required"),
	email: yup
		.string()
		.trim()
		.email("Must be a valid email address")
		.required("Email is a required field"),
	address: yup.string().required(),
	zip: yup.string().trim().required("Zip is required"),
	city: yup.string().trim().required("City is required"),
	state: yup.string().trim().required("State is required"),
});

const Checkout = (props) => {
	const [client, setClient] = useState([]);
	const [clientId, setClientId] = useState("");
	const [clientList, setClientList] = useState([]);
	const [totalCost, setTotalCost] = useState(0);
	const [classesNull, setClassesNull] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const handleChange = (e) => {
		const { name, value } = e.target;

		validate(name, value);
		setFormValues({ ...formValues, [name]: value });
	};
	const validate = (name, value) => {
		yup
			.reach(FormSchema, name)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [name]: "" });
			})
			.catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};
	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			const RegisterInfo = {
				first_name: formValues.first_name,
				last_name: formValues.last_name,
				email: formValues.email,
				address: formValues.address,
				zip: formValues.zip,
				city: formValues.city,
				state: formValues.state,
			};
		} catch (err) {
			console.log(err);
		}
	};
	const handleProcess = () => {
		props.history.push("/client/pay/process");
	};
	useEffect(() => {
		const userID = props.currentUser.userID || client.userID;
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
					setClientList(res.data.ClientList);
					const numbersFromCost = [];
					List.forEach((item) => {
						const cost = item.class_cost;
						numbersFromCost.push(cost);
					});

					let sum = 0;

					for (let i = 0; i < numbersFromCost.length; i++) {
						sum += numbersFromCost[i];
					}
					setTotalCost(sum);
				}
			})
			.catch((err) => console.log(err));
		setClientId(props.currentUser.userID);
	}, [props]);
	const handleDelete = (e, id) => {
		const ChoosenClientId = Number(e.target.id);
		const ChoosenClassId = Number(id.value);

		clientList.forEach((item) => {
			if (
				item.class_id === ChoosenClassId &&
				item.usersId === ChoosenClientId
			) {
				const foundClientListId = item.client_list_id;
				axios
					.delete(
						`https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/${foundClientListId}`
					)
					.then((res) => {
						const message = "deleted Class from cart and unregistered";
						alert(message);
						props.history.push("/client/pay");
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	};
	const renderCart = () => {
		return classesNull.map((item) => {
			const link =
				classesNull === null ? null : (
					<tbody>
						<tr>
							<th className="Unregister" scope="row">
								<a
									className="Unregister"
									id={clientId}
									onClick={(e) => {
										handleDelete(e, { value: item.classId });
									}}
									href="#/"
								>
									X
								</a>
							</th>
							<th id="date" scope="row">
								{item.class_date}
							</th>
							<th id="name" scope="row">
								{item.class_name}
							</th>
							<th id="cost" scope="row">
								${item.class_cost}
							</th>
						</tr>
					</tbody>
				);
			return link;
		});
	};
	return (
		<div className="checkout-container">
			<div ClassName="checkoutList">
				<table className="tableInfo">
					<thead className="tablInfoContainer">
						<tr className="tablInfoRows">
							<th id="unregister" scope="col">
								Unregister
							</th>
							<th id="date" scope="col">
								Class Date
							</th>
							<th id="name" scope="col">
								Name
							</th>
							<th id="cost" scope="col">
								Cost
							</th>
						</tr>
					</thead>
					{renderCart()}
				</table>
			</div>
			<div className="costNsubmit">
				<h3 className="totalCostContainer">
					Total Cost:<span className="totalCost">${totalCost}</span>
				</h3>
				<button type="submit" onClick={handleProcess}>
					Process Payment
				</button>
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
	setClientClasses,
})(Checkout);
