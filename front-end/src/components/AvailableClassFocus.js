import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { registerClass, setClientList } from "../actions/actions";
import axios from "axios";

export const renderDisplay = (card, handleRegister) => (
	<div className="focusCard_Container">
		<div className="focusCardImage_Container">
			<img
				src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				alt="Gym"
			/>
		</div>
		<div className="FocusCard_ClassInfo">
			<div>
				<h1 className="classname">
					<span className="infoData">{card.class_name}</span>
				</h1>
			</div>
			<div className="ClassInfo_type_inten">
				<p className="class_type">
					Class Type: <span className="infoData">{card.class_type}</span>
				</p>
				<p className="class_intensity">
					Intensity Level:{" "}
					<span className="infoData">{card.class_intensity_level}</span>
				</p>
			</div>
			<div className="ClassInfo_date_time">
				<p className="class_date">
					Date: <span className="infoData">{card.class_date}</span>
				</p>
				<p className="class_time">
					Time:
					<span className="infoData">
						{card.class_time} {card.class_am_or_pm}
					</span>
				</p>
			</div>
			<div className="ClassInfo_duration_cost">
				<p className="class_duration">
					Duration: <span className="infoData">{card.class_duration}</span>{" "}
					Minutes
				</p>
				<p className="class_cost">
					Cost: <span className="infoData">{card.class_cost}</span>{" "}
				</p>
			</div>
			<div className="btnDiv">
				<button className="btn btn-primary register" onClick={handleRegister}>
					Register
				</button>
			</div>
		</div>
	</div>
);

function AvailableClassFocus(props) {
	const { id } = useParams();
	// const card = dummyData.find((card) => card.id === parseInt(id));
	const card = props.classes.find((card) => card.classId === Number(id));

	const handleRegister = () => {
		// if (props.currentUser.classes.includes(card)) return;
		// props.registerClass(card);
		const registerObject = {
			class_id: card.classId,
			usersId: props.currentUser.userID,
		};
		console.log(registerObject);
		axios
			.post(
				"https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/",
				registerObject
			)
			.then((res) => {
				props.setClientList(res.data.FoundClientList);
				alert(res.data.message);
				setTimeout(() => {
					props.history.push("/client");
				}, 500);
			})
			.catch((err) => console.log(err));
	};

	return renderDisplay(card, handleRegister);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { registerClass, setClientList })(
	AvailableClassFocus
);
