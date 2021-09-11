import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { unregister, setClientClasses } from "../actions/actions";
import axios from "axios";

function UpcomingClasses(props) {
	let history = useHistory();
	const [chooseChoice, setChooseChoice] = useState(false);
	const handleChoice = () => {
		setChooseChoice(true);
	};
	const handleYes = (e) => {
		const currentUserID = props.currentUser.userID;
		const choosenClassID = e.target.id;
		handleUnregister(choosenClassID, currentUserID);
		setChooseChoice(false);
	};
	const handleNo = (e) => {
		("No");
		setChooseChoice(false);
	};
	const handleFindClientList = (classsId, userId) => {};
	const handleUnregister = (classId, userID) => {
		const userInfo = { usersId: userID };
		axios
			.post(
				`https://anywherefitnessapis.herokuapp.com/api/v1/clientList/user/clientList`,
				userInfo
			)
			.then((res) => {
				const classesRegistered = res.data.List;
				classesRegistered.forEach((item) => {
					const foundClassID = item.class_id.toString();
					if (foundClassID === classId) {
						const idOfListToDestroy = item.client_list_id;
						handleDelete(idOfListToDestroy);
					} else {
						return null;
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleDelete = (id) => {
		axios
			.delete(
				`https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/${id}`
			)
			.then((res) => {
				const message = res.data.message;
				alert(message);
				history.push("/client");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleCode = (e) => {
		e.preventDefault();
		const classId = e.target.id;
		props.history.push(`/clientQrcode/${classId}`);
	};
	useEffect(() => {
		axios
			.get("https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/")
			.then((res) => {
				const clientList = res.data.allClassLists.filter((cur) => {
					return cur.usersId === props.currentUser.userID;
				});
				clientList.forEach(
					(item) =>
						(item.class = props.classes.find(
							(_class) => _class.classId === item.class_id
						))
				);
				props.setClientClasses(clientList);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			{props.clientClasses.map((item) => {
				return (
					<div className="container my-2 bg-secondary border">
						<div className="d-flex justify-content-between">
							{/* <div className="card-available-img-wrap inst-card-img-width">
								<img
									src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
									alt="Gym"
									className="img-fluid"
								/>
							</div> */}
							<div className="me-5 pe-5 ps-2 flex-grow-1">
								<div className="inst-card-text-top ">
									<h2>{item.class["class_name"]}</h2>
									<h3>Type: {item.class["class_type"]}</h3>
								</div>
								<br />
								<div className="d-flex justify-content-between">
									<p>Date: {item.class["class_date"]}</p>
									<p>Time: {item.class["class_time"]}</p>
									<p>Duration: {item.class["class_duration"]}</p>
								</div>
								<div>
									<p>Intensity: {item.class["class_intensity_level"]}</p>
									<p>Description: {item.class["class_description"]}</p>
									<p>Cost: ${item.class["class_cost"]}</p>
								</div>
							</div>
							<div>
								<div
									className="d-flex flex-column justify-content-between align-items-end m-auto p-3"
									style={{ height: "100%" }}
								>
									<button
										type="button"
										class="btn-close"
										aria-label="Close"
										onClick={handleChoice}
									></button>
									{chooseChoice ? (
										<div className="chooseFate">
											<p>Are you sure you want to Unregister</p>
											<button
												id={item.class["classId"]}
												onClick={(e) => {
													handleYes(e);
												}}
												className="btn btn-primary"
											>
												Yes
											</button>
											<button onClick={handleNo} className="btn btn-danger">
												No
											</button>{" "}
										</div>
									) : null}

									<button
										id={item.class["classId"]}
										onClick={(e) => handleCode(e)}
										className="p-2 btn btn-dark"
									>
										Punch Pass
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { unregister, setClientClasses })(
	UpcomingClasses
);
// changes
