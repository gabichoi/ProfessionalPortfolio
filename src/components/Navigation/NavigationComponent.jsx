import React, { useState, useEffect } from "react";
import "./NavigationStyling.css";

const NavigationComponent = () => {
	// Define activeNav and setActiveNav using the useState hook
	const [activeNav, setActiveNav] = useState("#");

	// Use useEffect to add the scroll event listener and cleanup
	useEffect(() => {
		// Define a function to handle the scroll event
		const handleScroll = () => {
		const scrollY = window.scrollY;

		// Get the DOM elements for each section by their IDs
		const aboutSection = document.getElementById("about");
		const projectSection = document.getElementById("project");
		const contactSection = document.getElementById("contact");

		// Calculate the top offsets for each section
		const aboutOffset = aboutSection.getBoundingClientRect().top + scrollY;
		const projectOffset =
		projectSection.getBoundingClientRect().top + scrollY;
		const contactOffset =
		contactSection.getBoundingClientRect().top + scrollY;

		if (scrollY < aboutOffset) {
			setActiveNav("#header");
		} else if (scrollY < projectOffset) {
			setActiveNav("#about");
		} else if (scrollY < contactOffset) {
			setActiveNav("#project");
		} else {
			setActiveNav("#contact");
		}
	};

		// Add the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // The empty array means this effect runs once, similar to componentDidMount

	return (
		<nav>
			<a href="#header" className={activeNav === "#header" ? "active" : ""}>
				HOME
			</a>
			<a href="#about" className={activeNav === "#about" ? "active" : ""}>
				ABOUT
			</a>
			<a href="#project" className={activeNav === "#project" ? "active" : ""}>
				PROJECTS
			</a>
			<a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
				CONTACT
			</a>
		</nav>
	);
};

export default NavigationComponent;
