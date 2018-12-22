import React from "react";
import PropTypes from "prop-types";
import { SliderCarrousel } from "./slider.jsx";
import Counter from "./Counter.jsx";

export function Carrousel() {
	return (
		<div style={{ position: "relative" }}>
			<SliderCarrousel />

			<div className="artist_name">
				<div className="wrapper" style={{ boxSizing: "content-box" }}>
					Ariana Grande
				</div>
			</div>

			<Counter />
		</div>
	);
}
