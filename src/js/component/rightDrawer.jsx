import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { scroller } from "react-scroll";

const RightDrawer = props => {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -150
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement("first")}>
					Event starts in
				</ListItem>

				<ListItem button onClick={() => scrollToElement("second")}>
					Venue NFO
				</ListItem>

				<ListItem button onClick={() => scrollToElement("third")}>
					Highlights
				</ListItem>

				<ListItem button onClick={() => scrollToElement("fourth")}>
					Pricing
				</ListItem>

				<ListItem button onClick={() => scrollToElement("fifth")}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
};

export default RightDrawer;

RightDrawer.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func
};
