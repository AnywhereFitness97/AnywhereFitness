import React, { useState } from "react";
import * as yup from "yup";
import dummyData from "../../dummyData";
import { connect } from "react-redux";

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

const FormSchema = yup.object().shape({
  class_name: yup.string().required(),
  class_type: yup.string().required(),
  class_time: yup.string().required(),
  class_date: yup.string().required(),
  class_duration: yup.string().required(),
  class_intensity_level: yup.string().required(),
  class_location: yup.string().required(),
  max_class_size: yup.string().required(),
});

const UpdateForm = (props) => {
  const id = props.match.params.id;
  const initialFormValues = props.currentUser.classes.find(
    (card) => card.id == id
  );

  const [updateFormValues, setUpdateFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
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
            value={updateFormValues["class_location"].address}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["class_location"]}</div>
        <label>
          Max Class Number
          <input
            type="text"
            name="max_class_size"
            value={updateFormValues["class_size"]}
            onChange={handleChange}
          />
        </label>
        <div className="error">{formErrors["max_class_size"]}</div>
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(UpdateForm);
