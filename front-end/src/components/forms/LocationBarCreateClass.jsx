import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";

function LocationBar(props) {
	const { setFormData, formData, editClassLocation } = props;
	const [address, setAddress] = useState("");
	const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

	const handleSelect = async (value) => {
		const results = await geocodeByAddress(value);
		const latlng = await getLatLng(results[0]);
		setAddress(results[0].formatted_address);
		setCoordinates(latlng);
		// const locationObj = {
		//   address: results[0].formatted_address,
		//   coordinates: coordinates,
		// };
		setFormData({
			...formData,
			class_location: results[0].formatted_address,
			class_location_lat: coordinates.lat,
			class_location_long: coordinates.lng,
		});
	};

	useEffect(() => {
		if (editClassLocation) {
			setAddress(editClassLocation);
		}
	}, []);

	return (
		<div>
			<PlacesAutocomplete
				value={address}
				onChange={setAddress}
				onSelect={handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
					return (
						<div>
							<div className="m-auto" style={{ width: "100%" }}>
								<div className="d-flex justify-content-between">
									<input
										{...getInputProps({
											placeholder: "Type Address",
										})}
										// onChange={handleChange}
										style={{ width: "100%" }}
									/>
								</div>

								<div
									style={{
										zIndex: "3",
										position: "absolute",
										paddingTop: "2px",
										// border: "2px solid black",
										borderRadius: "2px",
										overflow: "hidden",
									}}
								>
									{loading ? (
										<div style={{ backgroundColor: "white", width: "500px" }}>
											...Loading
										</div>
									) : null}

									{suggestions.map((suggestion) => {
										const style = {
											zIndex: "2",
											width: "500px",
											cursor: suggestion.active ? "pointer" : null,
											backgroundColor: suggestion.active ? "#d3d3d3" : "white",
										};
										return (
											<div {...getSuggestionItemProps(suggestion, { style })}>
												{suggestion.description}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					);
				}}
			</PlacesAutocomplete>
		</div>
	);
}

export default LocationBar;
