import React, { useState } from "react";

const initialFormErrors = {
  class_name: "",
  class_type: "",
  class_time: "",
  class_date: "",
  class_duration: "",
  class_intensity_level: "",
  class_location: "",
  max_class_size: "",
};

const UpdateForm = (props) => {
  const [updateFormValues, setUpdateFormValues] = useState({});
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormValues({ ...updateFormValues, [name]: value });
  };

  return (
    <div>
      <h1>Update your class</h1>
      <form>
        <label>
          Class Name
          <input
            type="text"
            name="class_name"
            value={updateFormValues["class_name"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_name"]}</div>
        <label>
          Class Type
          <input
            type="text"
            name="class_type"
            value={updateFormValues["class_type"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_type"]}</div>
        <label>
          Class Time
          <input
            type="text"
            name="class_time"
            value={updateFormValues["class_time"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_time"]}</div>
        <label>
          Class Date
          <input
            type="date"
            name="class_date"
            value={updateFormValues["class_date"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_date"]}</div>
        <label>
          Class Duration
          <input
            type="text"
            name="class_duration"
            value={updateFormValues["class_duration"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_duration"]}</div>
        <label>
          Class Intensity Level
          <input
            type="text"
            name="class_intensity_level"
            value={updateFormValues["class_intensity_level"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_intensity_level"]}</div>
        <label>
          Class Location
          <input
            type="text"
            name="class_location"
            value={updateFormValues["class_location"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_location"]}</div>
        <label>
          Max Class Number
          <input
            type="text"
            name="max_class_size"
            value={updateFormValues["max_class_size"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["max_class_size"]}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateForm;
