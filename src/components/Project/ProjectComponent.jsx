import React from 'react'
import './ProjectStyle.css'
import project1 from '../../assets/project1.png';
import project2 from "../../assets/project2.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const ProjectComponent = () => {
	const projects = [
		{
			id: 1,
			image: project1,
			title: "Covid 19 Cases Tracker",
			description:
				"A web application that visualizes the distribution of confirmed cumulative Covid 19 cases worldwide.",
			tags: "Front-End || React, HTML, CSS",
			demo: "https://gabichoi.github.io/Covid19CasesTracker/",
			code: "https://github.com/gabichoi/Covid19CasesTracker/tree/main",
		},
		{
			id: 2,
			image: project2,
			title: "Covid 19 Mask Detector",
			description:
				"A system that detects if an individual is wearing a mask and provides a clear 'on' or 'off' indication.",
			tags: "Machine Learning || Open CV, TensorFlow",
			demo: "Unavailable",
			code: "Pending",
		},
		{
			id: 3,
			// image: b
			title: "Sign Language Interpreter",
			description:
				"A system that interprets 7 particular sign language gestures into their corresponding text meanings.",
			tags: "Machine Learning || Open CV, TensorFlow",
			demo: "Unavailable",
			code: "Pending",
		},
		{
			id: 4,
			image: project4,
			title: "Cheep Cheep Stay Dry",
			description:
				"A game in which players control a chick left and right to escape falling raindrops.",
			tags: "Full-Stack || Python, Pygame, Illustrator",
			demo: "",
			code: "",
		},
		{
			id: 5,
			image: project5,
			title: "The Eggcellent Timer",
			description:
				"A mobile application that offers multiple timers tailored to different preferences for boiling eggs.",
			tags: "Front-End || React, HTML, CSS, Illustrator",
			demo: "",
			code: "",
		},
		{
			id: 6,
			image: project6,
			title: "Bear Maps",
			description:
				"A backend server that generates a map of the Berkeley area for restaurant look-up.",
			tags: "Backend || Java",
			demo: "",
			code: "",
		},
	];

	const openLink = (link) => {
		window.open(link, "_blank");
	};

	return (
		<section id="project">
			<hr className="divider" />
			<h2>MY PROJECTS</h2>
			<div className="container project__container">
				{projects.map(({ id, image, title, description, tags, demo, code }) => {
					return (
						<article key={id} className="project__item">
							<div className="project__item-img">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<h4>{tags}</h4>
							<p>{description}</p>
							<div className="project__item-btns">
								<button className="btn" onClick={() => openLink(demo)}>
									DEMO
								</button>
								<button className="btn" onClick={() => openLink(code)}>
									CODE
								</button>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectComponent;