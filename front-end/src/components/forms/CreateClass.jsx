import React, { useState } from "react";

const CreateClass = () => {
	const [name, setName] = useState("");
	const [classDescription, setClassDescription] = useState("");
	const [classType, setClassType] = useState("");

	const [days, setDays] = useState("");
	const [time, setTime] = useState("");
	const [durationHours, setDurationHours] = useState("");
	const [durationMinutes, setDurationMinutes] = useState("");

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
						<label>Class Description</label>
						<input
							type="text"
							value={classDescription}
							onChange={(e) => {
								setClassDescription(e.target.value);
							}}
						/>
					</div>
					<div>
                    <label> Class Type:
                        <select
                            id='type-dropdown'
							type="dropdown"
                            value={classType}
							onChange={(e) => {
								setClassType(e.target.value);
							}}
                            name='type' 
                        >
                            <option>
                                --Choose Class Type--
                            </option>
                            <option>
                                Aerobics
                            </option>
							<option>
                                Aquatic Fitness
                            </option>
                            <option>
                                CrossFit
                            </option>
                            <option>
                                Dance
                            </option>
							<option>
                                Jazzercise
                            </option>
							<option>
                                Kickboxing
                            </option>							
							<option>
                                Personal Training
                            </option>
							<option>
                                Pilates
                            </option>
							<option>
                                Spinning
                            </option>
							<option>
                                Step Aerobics
                            </option>
							<option>
                                Yoga
                            </option>
							<option>
                                Zumba
                            </option>
							<option>
                                Other
                            </option>
                        </select>
                    </label>
                	</div>

					<div>
                    <label>Days of Class</label>
                        <input
                            type="checkbox"
                            name='sunday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Sun
					<br/>
					<input
                            type="checkbox"
                            name='monday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Mon
					<br/>
					<input
                            type="checkbox"
                            name='tuesday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Tue
					<br/>
					<input
                            type="checkbox"
                            name='wednesday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Wed
					<br/>
					<input
                            type="checkbox"
                            name='thursday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Thurs
					<br/>
					<input
                            type="checkbox"
                            name='friday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Fri
					<br/>
					<input
                            type="checkbox"
                            name='sunday'
                            value={days}
							onChange={(e) => {
								setDays(e.target.value);
							}}
                            checked={value.checked}
                        /> Sat
					<br/>
					</div>
					<div>
						<label>Class Time</label>
						<input
							type="time"
							value={time}
							onChange={(e) => {
								setTime(e.target.value);
							}}
							InputLabelProps={{
								shrink: true,
							  }}
							  inputProps={{
								step: 300, // 5 min
							  }}
						/>
					</div>
					<div>
					<label> Class Duration:
                        <select
                            id='hours-dropdown'
							type="dropdown"
                            value={durationHours}
							onChange={(e) => {
								setDurationHours(e.target.value);
							}}
                            name='type' 
                        >
                            <option>
                                --Hours--
                            </option>
							<option>
                                0 Hours
                            </option>
                            <option>
                                1 Hour
                            </option>
							<option>
                                2 Hours
                            </option>
						</select>
						
						<select
                            id='minutes-dropdown'
							type="dropdown"
                            value={durationMinutes}
							onChange={(e) => {
								setDurationMinutes(e.target.value);
							}}
                            name='type' 
                        >
                            <option>
                                --Minutes--
							</option>
							<option>
                                0 Minutes
                            </option>
							<option>
								5 Minutes
							</option>
							<option>
                                10 Minutes
                            </option>
							<option>
                                15 Minutes
                            </option>
							<option>
								20 Minutes
							</option>
							<option>
                             	25 Minutes
                            </option>
							<option>
                                30 Minutes
                            </option>
							<option>
                                35 Minutes
                            </option>
							<option>
                                40 Minutes
                            </option>
							<option>
                                45 Minutes
                            </option>
							<option>
                                50 Minutes
                            </option>
							<option>
                                55 Minutes
                            </option>
						</select>
					</label>
					</div>
					<div>
					<label> Intensity Level:
                        <select
                            id='intensity-dropdown'
							type="dropdown"
                            value={intensityLevel}
							onChange={(e) => {
								setIntensityLevel(e.target.value);
							}}
                            name='type' 
                        >
                            <option>
                                --Intensity--
                            </option>
							<option>
                                Low
                            </option>
                            <option>
                                Medium
                            </option>
							<option>
                                High
                            </option>
							<option>
								Extreme
							</option>
						</select>
					</label>
					</div>
					<div>
						<label>Location</label>
						<input
							type="text"
							value={location}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						/>
					</div>
					<div>
					<label> Class Size:
                        <select
                            id='class-size-dropdown'
							type="dropdown"
                            value={numberOfAttendees}
							onChange={(e) => {
								setNumberOfAttendees(e.target.value);
							}}
                            name='attendees' 
                        >
                            <option>
                                --Class Size--
                            </option>
							<option>
                                1 - 5 Clients
                            </option>
                            <option>
                                5-10 Clients
                            </option>
							<option>
                                10-20 Clients
                            </option>
							<option>
								20-30 Clients
							</option>
						</select>
					</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateClass;