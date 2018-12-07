import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const RightDrawer = props => {
	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}>
			<List component="nav">
				<ListItem button onClick={() => console.log("featured")}>
					Event start in
				</ListItem>
				<ListItem button onClick={() => console.log("venue nfo")}>
					Venue NFO
				</ListItem>
				<ListItem button onClick={() => console.log("higlight")}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => console.log("pricing")}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => console.log("location")}>
					Locatoin
				</ListItem>
			</List>
		</Drawer>
	);
};

export default RightDrawer;

RightDrawer.propTypes = {
	open: PropTypes.func,
	onClose: PropTypes.func
};
