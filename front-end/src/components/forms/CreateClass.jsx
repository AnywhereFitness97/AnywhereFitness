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

  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    let valueToUse = e.target.value;
    if (e.target.type === "checkbox") {
      valueToUse = e.target.checked;
    }
    setFormData({ ...formData, [e.target.name]: valueToUse });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Create Class</h1>
      <div className="classForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Class Name</label>
            <input
              type="text"
              value={formData.class_name}
              onChange={onChange}
              name="class_name"
            />
          </div>
          <div>
            <label>Class Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={onChange}
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
                value={formData.class_type}
                onChange={onChange}
                name="class_type"
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
              onChange={onChange}
              checked={formData.sunday}
            />{" "}
            Sun
            <br />
            <input
              type="checkbox"
              name="monday"
              onChange={onChange}
              checked={formData.monday}
            />{" "}
            Mon
            <br />
            <input
              type="checkbox"
              name="tuesday"
              onChange={onChange}
              checked={formData.tuesday}
            />{" "}
            Tue
            <br />
            <input
              type="checkbox"
              name="wednesday"
              onChange={onChange}
              checked={formData.wednesday}
            />{" "}
            Wed
            <br />
            <input
              type="checkbox"
              name="thursday"
              onChange={onChange}
              checked={formData.thursday}
            />{" "}
            Thurs
            <br />
            <input
              type="checkbox"
              name="friday"
              onChange={onChange}
              checked={formData.friday}
            />{" "}
            Fri
            <br />
            <input
              type="checkbox"
              name="saturday"
              onChange={onChange}
              checked={formData.saturday}
            />{" "}
            Sat
            <br />
          </div>
          <div>
            <label>Class Time</label>
            <input
              type="time"
              //   value={time}
              onChange={onChange}
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
                value={formData.duration}
                onChange={onChange}
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
                value={formData.intensity}
                onChange={onChange}
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
              value={formData.location}
              onChange={onChange}
              name="location"
            />
          </div>
          <div>
            <label>
              {" "}
              Class Size:
              <input
                type="number"
                value={formData.class_size}
                onChange={onChange}
                name="class_size"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateClass;
