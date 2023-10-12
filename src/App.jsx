import React from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import NavigationComponent from "./components/Navigation/NavigationComponent";
import AboutComponent from "./components/About/AboutComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import ProjectComponent from "./components/Project/ProjectComponent";

const App = () => {
	return (
		<div className="mainContainer">
			<div className="left-column">
				<NavigationComponent />
			</div>

			<div className="right-column">
				<HeaderComponent />
				<AboutComponent />
				<ProjectComponent />
				<ContactComponent />
			</div>
		</div>
	);
};

export default App;
