import React, { useState, useEffect } from "react";
import InstructorClassCard from "./InstructorClassCard";
import { connect } from "react-redux";
import { getClasses } from "../actions/actions";

function Instructor(props) {
	const [instructorClasses, setInstructorClasses] = useState([]);
	useEffect(() => {
		props.getClasses();
		const classes = props.classes.filter(
			(_class) =>
				_class.class_instructor_username === props.currentUser.username
		);
		setInstructorClasses(classes);
	}, []);

	return (
		<section className="p-5">
			<div className="container">
				{instructorClasses && (
					<div>
						{instructorClasses.map((card) => (
							<InstructorClassCard
								card={card}
								setInstructorClasses={setInstructorClasses}
								instructorClasses={instructorClasses}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { getClasses })(Instructor);
