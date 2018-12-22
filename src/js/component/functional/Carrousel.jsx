import React from "react";
import PropTypes from "prop-types";
import { SliderCarrousel } from "./slider.jsx";

export function Carrousel() {
	return (
		<div style={{ position: "relative" }}>
			<SliderCarrousel />

			<div className="artist_name" style={{ boxSizing: "content-box" }}>
				<div className="wrapper">Ariana Grande</div>
			</div>
		</div>
	);
}
