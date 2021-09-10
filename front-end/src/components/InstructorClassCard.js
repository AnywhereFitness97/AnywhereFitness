import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
	deleteClass,
	updateCurrentUser,
	setClasses,
	getClasses,
} from "../actions/actions";
import { connect } from "react-redux";
import axios from "axios";

function InstructorClassCard(props) {
	const { card } = props;
	const { setInstructorClasses } = props;

	useEffect(() => {
		const classes = props.classes.filter(
			(_class) =>
				_class.class_instructor_username === props.currentUser.username
		);
		setInstructorClasses(classes);
	}, [props.classes]);

	const handleDelete = () => {
		axios
			.delete(
				`https://anywherefitnessapis.herokuapp.com/api/v1/class/${card.classId}`
			)
			.then((res) => {
				props.getClasses();
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="my-2 border">
			<div className="d-flex">
				{/* <div className="card-available-img-wrap inst-card-img-width">
          <imgs
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            className="img-fluid"
            alt="dumbell weights"
          />
        </div> */}
				<div className="p-2">
					<div className="inst-card-text-top">
						<h1>{card.class_name}</h1>
						<h4>{card.class_location.address}</h4>
					</div>
					<div className="d-flex justify-content between ">
						<h4>{card.class_date}</h4>
						<h4>{card.class_time}</h4>
						<h4>{card.class_duration}</h4>
					</div>
					<h4>Intensity: {card.class_intensity_level}</h4>
					<h4>Cost: $10</h4>
					<Link to={`/instructor/${card.classId}`}>
						<button className="btn btn-dark">Edit</button>
					</Link>
					<button className="btn btn-danger" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};
export default connect(mapStateToProps, {
	deleteClass,
	updateCurrentUser,
	setClasses,
	getClasses,
})(InstructorClassCard);
