import React from "react";
import PropTypes from "prop-types";
import SliderCarrousel from "./slider.jsx";

function Carrousel() {
	return (
		<div style={{ position: "relative" }}>
			<SliderCarrousel />

			<div className="carrousel_name">
				<div className="wrapper">Ariana Grande</div>
			</div>
		</div>
	);
}

export default Carrousel;
