import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { unregister, setClientClasses } from "../actions/actions";
import axios from "axios";

const PastClasses = (props) => {
	let history = useHistory();
	const [client, setClient] = useState([]);
	const [clientListFromDB, setClientListFromDB] = useState([]);
	const [classesAttended, setClassesAttended] = useState([]);
	const [classesNull, setClassesNull] = useState([]);
	const [classesOther, setClassesOther] = useState([]);
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
		setChooseChoice(false);
	};
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
					setClient(res.data.Client);
					setClientListFromDB(res.data.ClientList);
					setClassesAttended(res.data.ClassesAttendedYes);
					setClassesNull(res.data.ClassesAttendedNull);
					setClassesOther(res.data.ClassesAttendedOther);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="class-Container">
			<div className="class-Coming-Up-Container">
				<div className="class-Coming-Up">
					<h2>Registered Classes ({classesNull.length})</h2>
				</div>
				{classesNull === null ? null : (
					<>
						{classesNull.map((item) => {
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
												<h2>{item.class_name}</h2>
												<h3>Type: {item.class_type}</h3>
											</div>
											<br />
											<div className="d-flex justify-content-between">
												<p>Date: {item.class_date}</p>
												<p>Time: {item.class_time}</p>
												<p>Duration: {item.class_duration}</p>
											</div>
											<div>
												<p>Intensity: {item.class_intensity_level}</p>
												<p>Description: {item.class_description}</p>
												<p>Cost: ${item.class_cost}</p>
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
															id={item.classId}
															onClick={(e) => {
																handleYes(e);
															}}
															className="btn btn-primary"
														>
															Yes
														</button>
														<button
															onClick={handleNo}
															className="btn btn-danger"
														>
															No
														</button>{" "}
													</div>
												) : null}

												<button
													id={item.classId}
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
					</>
				)}
			</div>
			<div className="class-Coming-Up-Container">
				<div className="class-Coming-Up">
					<h2>Classes Attended In Past ({classesAttended.length})</h2>
				</div>
				{classesAttended === null ? null : (
					<>
						{classesAttended.map((item) => {
							return (
								<div className="container my-2 bg-secondary border">
									<div className="d-flex justify-content-between">
										<div className="card-available-img-wrap inst-card-img-width">
											<img
												src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
												alt="Gym"
												className="img-fluid"
											/>
										</div>
										<div className="me-5 pe-5 ps-2 flex-grow-1">
											<div className="inst-card-text-top ">
												<h2>{item.class_name}</h2>
												<h3>Type: {item.class_type}</h3>
											</div>
											<br />
											<div className="d-flex justify-content-between">
												<p>Date: {item.class_date}</p>
												<p>Time: {item.class_time}</p>
												<p>Duration: {item.class_duration}</p>
											</div>
											<div>
												<p>Intensity: {item.class_intensity_level}</p>
												<p>Description: {item.class_description}</p>
												<p>Cost: ${item.class_cost}</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
			<div className="class-Coming-Up-Container">
				<div className="class-Coming-Up">
					<h2>Classes Missed ({classesOther.length})</h2>
				</div>
				{classesOther === null ? null : (
					<>
						{classesOther.map((item) => {
							return (
								<div className="container my-2 bg-secondary border">
									<div className="d-flex justify-content-between">
										<div className="card-available-img-wrap inst-card-img-width">
											<img
												src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
												alt="Gym"
												className="img-fluid"
											/>
										</div>
										<div className="me-5 pe-5 ps-2 flex-grow-1">
											<div className="inst-card-text-top ">
												<h2>{item.class_name}</h2>
												<h3>Type: {item.class_type}</h3>
											</div>
											<br />
											<div className="d-flex justify-content-between">
												<p>Date: {item.class_date}</p>
												<p>Time: {item.class_time}</p>
												<p>Duration: {item.class_duration}</p>
											</div>
											<div>
												<p>Intensity: {item.class_intensity_level}</p>
												<p>Description: {item.class_description}</p>
												<p>Cost: ${item.class_cost}</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { unregister, setClientClasses })(
	PastClasses
);
