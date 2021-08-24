import React, { useState } from "react";
import * as yup from 'yup'
	import { boolean } from 'yup/lib/locale'

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
  
  export default yup.object().shape({
		class_name: yup
			.string()
			.required("Class Name is required")
			.min(7, "name must be at least 7 characters"),
		description: yup
			.string()
			.max(200, 'Shorten your message to 200 chars'),
		class_type: yup
			.string()
			.oneOf(['Aerobics', 'Aquatic Fitness', 'CrossFit', 'Dance', 'Jazzercise', 'Kickboxing', 'Personal Training', 'Pilates', 'Spinning', 'Step Aerobics', 'Yoga', 'Zumba', 'Other'], 'class_type is required'),
		
		sunday: yup.boolean(),
		monday: yup.boolean(),
		tuesday: yup.boolean(),
		wednesday: yup.boolean(),
		thursday: yup.boolean(),
		friday: yup.boolean(),
		saturday: yup.boolean(),
	
		duration: yup
			.string()
			.oneOf(['30 Minutes', '45 Minutes', '60 Minutes', '75 Minutes', '90 Minutes', '105 Minutes', '120 Minutes']'duration is required'),
		intensity: yup
			.string()
			.oneOf(['Low', 'Medium', 'High', 'Extreme']'intensity is required'),
		location: yup
			.string()
			.max(50, 'Shorten your message to 50 chars'),
		class_size: yup
			.number(),
			
	})

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
