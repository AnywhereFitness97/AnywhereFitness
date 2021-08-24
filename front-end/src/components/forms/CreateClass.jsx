import React, { useState } from "react";

const CreateClass = () => {
  const [name, setName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [classType, setClassType] = useState("");

  const [days, setDays] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

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
              name="class-name"
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
              name="description"
            />
          </div>
          <div>
            <label>
              {" "}
              Class Type:
              <select
                id="type-dropdown"
                type="dropdown"
                value={classType}
                onChange={(e) => {
                  setClassType(e.target.value);
                }}
                name="class-type"
              >
                <option>--Choose Class Type--</option>
                <option>Aerobics</option>
                <option>Aquatic Fitness</option>
                <option>CrossFit</option>
                <option>Dance</option>
                <option>Jazzercise</option>
                <option>Kickboxing</option>
                <option>Personal Training</option>
                <option>Pilates</option>
                <option>Spinning</option>
                <option>Step Aerobics</option>
                <option>Yoga</option>
                <option>Zumba</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <div>
            <label>Days of Class</label>
            <input
              type="checkbox"
              name="sunday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Sun
            <br />
            <input
              type="checkbox"
              name="monday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Mon
            <br />
            <input
              type="checkbox"
              name="tuesday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Tue
            <br />
            <input
              type="checkbox"
              name="wednesday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Wed
            <br />
            <input
              type="checkbox"
              name="thursday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Thurs
            <br />
            <input
              type="checkbox"
              name="friday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Fri
            <br />
            <input
              type="checkbox"
              name="sunday"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
              }}
              checked={(e) => e.value.checked}
            />{" "}
            Sat
            <br />
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
              name="time"
            />
          </div>
          <div>
            <label>
              {" "}
              Class Duration:
              <select
                id="duration-dropdown"
                type="dropdown"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
                name="duration"
              >
                <option>--Duration--</option>
                <option>30 Minutes</option>
                <option>45 Minutes</option>
                <option>60 Minutes</option>
                <option>75 Minutes</option>
                <option>90 Minutes</option>
                <option>105 Minutes</option>
                <option>120 Minutes</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              {" "}
              Intensity Level:
              <select
                type="dropdown"
                value={intensityLevel}
                onChange={(e) => {
                  setIntensityLevel(e.target.value);
                }}
                name="intensity"
              >
                <option>--Intensity--</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Extreme</option>
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
              name="location"
            />
          </div>
          <div>
            <label>
              {" "}
              Class Size:
              <input
                type="number"
                value={numberOfAttendees}
                onChange={(e) => {
                  setNumberOfAttendees(e.target.value);
                }}
                name="class-size"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
