import React from "react";
import { useHistory } from "react-router-dom";

export const AvailableClassCard = (props) => {
	const { card } = props;
	const { push } = useHistory();
	const handleClick = (e) => {
		push(`/client/focus/${card.classId}`);
	};
	return (
		<div className="card-available-wrap">
			<div className="card-available " onClick={handleClick}>
				<div className="card-info">
					<div className="card-available-img-wrap">
						<img
							src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
							alt="Gym"
							className="card-available-img"
						/>
					</div>
					<div className="card-name-container">
						<h2>{card["class_name"]}</h2>
						<p>{card["class_date"]}</p>
					</div>

					<div className="card-time-duration-type-container">
						<div className="card-time">
							<p>
								{card["class_time"]} {card["class_am_or_pm"]}{" "}
							</p>
						</div>
						<div className="card-duration">
							<p>{card["class_duration"]} mins</p>
						</div>
						<div className="card-type">
							<p>{card["class_type"]}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvailableClassCard;
