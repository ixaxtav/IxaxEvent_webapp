import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TicketIcon from "../../../src/img/icons/ticket.png";

const MyButton = props => {
	return (
		<Button
			href={props.link}
			variant="contained"
			size="smal"
			style={{
				background: props.bck,
				color: props.color
			}}>
			<img src={TicketIcon} className="iconImage" alt="icon_button" />
			{props.text}
		</Button>
	);
};

export default MyButton;

MyButton.propTypes = {
	link: PropTypes.string,
	bck: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.string
};
