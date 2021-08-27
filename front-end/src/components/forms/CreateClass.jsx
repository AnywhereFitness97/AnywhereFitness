import React, { useState, useEffect } from "react";
import * as yup from "yup";
import LocationBar from "./LocationBarCreateClass";
import { connect } from "react-redux";
import {
  addNewClass,
  updateCurrentUser,
  setClasses,
} from "../../actions/actions";
import randId from "../../utils/randomIdGen";
import "../../App.css";
import axios from "axios";
import Logo from "../../assets/personal_trainer.svg";

const CreateClass = (props) => {
  const [formData, setFormData] = useState({});

  const formSchema = yup.object().shape({
    class_name: yup
      .string()
      .required("Class Name is required")
      .min(7, "name must be at least 7 characters"),
    description: yup.string().max(200, "Shorten your message to 200 chars"),
    class_type: yup
      .string()
      .oneOf(
        [
          "Aerobics",
          "Aquatic Fitness",
          "CrossFit",
          "Dance",
          "Jazzercise",
          "Kickboxing",
          "Personal Training",
          "Pilates",
          "Spinning",
          "Step Aerobics",
          "Yoga",
          "Zumba",
          "Other",
        ],
        "class_type is required"
      ),

    sunday: yup.boolean(),
    monday: yup.boolean(),
    tuesday: yup.boolean(),
    wednesday: yup.boolean(),
    thursday: yup.boolean(),
    friday: yup.boolean(),
    saturday: yup.boolean(),

    duration: yup
      .string()
      .oneOf(
        [
          "30 Minutes",
          "45 Minutes",
          "60 Minutes",
          "75 Minutes",
          "90 Minutes",
          "105 Minutes",
          "120 Minutes",
        ],
        "duration is required"
      ),
    intensity: yup
      .string()
      .oneOf(["Low", "Medium", "High", "Extreme"], "intensity is required"),
    location: yup.string().max(50, "Shorten your message to 50 chars"),
    class_size: yup.number(),
  });

  const onChange = (e) => {
    let valueToUse = e.target.value;
    if (e.target.type === "checkbox") {
      valueToUse = e.target.checked;
    }
    setFormData({ ...formData, [e.target.name]: valueToUse });
    console.log(props);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formData.class_time) > 12) {
      formData.class_time =
        (parseInt(formData.class_time) - 12).toString() +
        formData.class_time[2] +
        formData.class_time[3] +
        formData.class_time[4];
      formData.class_am_or_pm = "pm";
    } else {
      formData.class_am_or_pm = "am";
    }
    formData.class_instructor_username = props.currentUser.username;
    formData.class_cost = 15;
    formData.class_duration = parseInt(formData.class_duration);
    // delete formData.class_size;
    // delete formData.class_location_lat;
    // delete formData.class_location_long;

    console.log(formData);
    const response = await axios.post(
      "https://anywherefitnessapis.herokuapp.com/api/v1/class/",
      formData
    );
    console.log(response);
    axios
      .get("https://anywherefitnessapis.herokuapp.com/api/v1/class/")
      .then((res) => {
        console.log(res);
        props.setClasses(res.data.allClasses);
      })
      .catch((err) => {
        console.log(err);
      });
    // props.addNewClass({
    //   ...formData,
    //   id: randId(),
    //   instructor_id: props.currentUser.id,
    // });
  };

  // useEffect(() => {
  //   props.updateCurrentUser();
  // }, [props.users.find((user) => user.id === props.currentUser.id)]);

  return (
    <section className="py-5">
      <div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center">
        <form
          onSubmit={handleSubmit}
          className="class-form d-flex flex-column ms-xl-4"
        >
          <h1>Create Class</h1>

          <div className="d-flex justify-content-between">
            <label className="d-flex flex-column half">
              Class Name
              <input
                type="text"
                value={formData.class_name}
                onChange={onChange}
                name="class_name"
              />
            </label>

            <label className="d-flex flex-column half">
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

          <label className="d-flex flex-column">
            Class Description
            <input
              type="text"
              value={formData.description}
              onChange={onChange}
              name="class_description"
            />
          </label>

          <div className="d-flex justify-content-between">
            <label className="d-flex flex-column half">
              {" "}
              Class Duration:
              <select
                id="duration-dropdown"
                type="dropdown"
                value={formData.duration}
                onChange={onChange}
                name="class_duration"
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

            <label className="d-flex flex-column half">
              {" "}
              Intensity Level:
              <select
                type="dropdown"
                value={formData.intensity}
                onChange={onChange}
                name="class_intensity_level"
              >
                <option>--Intensity--</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Extreme</option>
              </select>
            </label>
          </div>
          <label>
            Location
            <LocationBar setFormData={setFormData} formData={formData} />
          </label>
          <div className="d-flex justify-content-between">
            <label className="d-flex flex-column third">
              Class Date
              <input
                type="date"
                name="class_date"
                value={formData.class_date}
                onChange={onChange}
              />
            </label>
            <label className="d-flex flex-column third">
              Class Time
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
                name="class_time"
              />
            </label>

            <label className="d-flex flex-column third">
              {" "}
              Max Class Size:
              <input
                type="number"
                value={formData.class_size}
                onChange={onChange}
                name="max_class_size"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary align-self-end ">
            Submit
          </button>
        </form>
        <img src={Logo} className="class-form-logo d-none d-sm-block me-xl-4" />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  addNewClass,
  updateCurrentUser,
  setClasses,
})(CreateClass);
