import React, { useState } from "react";

const CreateClass = () => {
	const [name, setName] = useState("");
	const [time, setTime] = useState("");
	const [classDescription, setClassDescription] = useState("");
	const [date, setDate] = useState("");
	const [duration, setDuration] = useState("");
	const [typeClass, setTypeClass] = useState("");
	const [intensityLevel, setIntensityLevel] = useState("");
	const [location, setLocation] = useState("");
	const [numberOfAttendees, setNumberOfAttendees] = useState("");

	return (
		<div>
			<h1>Create Class</h1>
			<div className="classForm">
				<form>
					<div>
						<label>Class Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Class Time</label>
						<input
							type="text"
							value={time}
							onChange={(e) => {
								setTime(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Class Name</label>
						<input
							type="text"
							value={classDescription}
							onChange={(e) => {
								setClassDescription(e.target.value);
							}}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};