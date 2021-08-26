import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import searchLogo from "../../assets/searchIcon.svg";

function LocationBar(props) {
  const { setFormData, formData } = props;
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
    const locationObj = {
      address: results[0].formatted_address,
      coordinates: coordinates,
    };
    setFormData({ ...formData, ["class_location"]: locationObj });
  };

  const handleChange = () => {
    console.log("hi");
  };
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <form>
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
            </form>
          );
        }}
      </PlacesAutocomplete>
    </div>
  );
}

export default LocationBar;
