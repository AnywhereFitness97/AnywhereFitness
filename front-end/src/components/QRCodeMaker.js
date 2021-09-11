import React, { useState, useEffect } from "react";

import axios from "axios";
import QRCode from "qrcode";
import { connect } from "react-redux";
import { registerClass, setClientList } from "../actions/actions";

const QRCodeMaker = (props) => {
	const [src, setSrc] = useState("");
	const [clientName, setClientName] = useState("");
	const [attendanceVerified, setAttendanceVerified] = useState(false);
	const paramsCheat = props.location.pathname.split("/");
	const classString = paramsCheat[2];
	const classNumber = Number(classString);
	const ClassLookup = props.classes.filter((classInDB) => {
		if (classInDB.classId === classNumber) {
			return classInDB.class_name;
		}
	});

	const ClassName = ClassLookup[0].class_name;

	const ClientName = `${props.currentUser.first_name} ${props.currentUser.last_name}`;

	const infoToSend = {
		class_id: classNumber,
		usersId: props.currentUser.userID,
		attendedClass: "Yes",
	};
	const UpdateClientList = () => {
		setAttendanceVerified(true);
		axios
			.get("https://anywherefitnessapis.herokuapp.com/api/v1/clientlist/")
			.then((response) => {
				const AllClientLists = response.data.allClassLists;

				AllClientLists.filter((item) => {
					const ClientlistId = item.client_list_id;
					const itemClassID = item.class_id;
					const itemUserID = item.usersId;
					if (
						itemClassID === infoToSend.class_id &&
						itemUserID === infoToSend.usersId
					) {
						axios
							.put(
								`https://anywherefitnessapis.herokuapp.com/api/v1/clientList/${ClientlistId}`,
								infoToSend
							)
							.then((response) => {
								const message = response.data.message;
								const userName = response.data.MemberInfo.Name;
								setClientName(userName);
								alert(message);
								setTimeout(() => {
									props.history.push("/client/pastclasses");
								}, 3000);
							})
							.catch((error) => {
								console.log(error);
							});
					}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		const text = `${ClientName} has joined ${ClassName}`;
		QRCode.toDataURL(text).then(setSrc);
	}, []);

	return (
		<div className="qrcodeContainer">
			<img
				onClick={UpdateClientList}
				className="qrcode"
				src={src}
				alt="Qr Code For Attendance"
			/>
			<button onClick={() => UpdateClientList()} className="btn btn-primary">
				Click Me
			</button>
			{attendanceVerified ? (
				<div className="attendanceTracker">
					<h1>Thank you for Attending Class</h1>
					<h3>We will begin soon...</h3>
				</div>
			) : (
				<h1>Class Attendance Not Verified</h1>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { registerClass, setClientList })(
	QRCodeMaker
);
