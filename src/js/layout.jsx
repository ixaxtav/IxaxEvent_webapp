import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import { Element } from "react-scroll";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Carrousel } from "./component/functional/Carrousel.jsx";
import Pricing from "./component/pricing.jsx";
import Location from "./component/location.jsx";
import Footer from "./component/footer.jsx";
import InfoTab from "./component/InfoTab.jsx";
import Highlights from "./component/highlights.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />

					<Element name="first" />
					<Carrousel />
					<Element name="second">
						<InfoTab />
					</Element>

					<Element name="third">
						<Highlights />
					</Element>

					<Element name="fourth">
						<Pricing />
					</Element>

					<Element name="fifth">
						<Location />
					</Element>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}
