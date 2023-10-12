import React from 'react'
import './AboutStyle.css'
import { AiFillLinkedin } from "react-icons/ai";
import { BiSolidFilePdf } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";

const AboutComponent = () => {
  return (
		<section id="about">
			<hr className="divider" />
			<h2>ABOUT ME</h2>
			<div className="container socials">
				<icon className="icon">
					<a href="mailto:gabiiichoiii@gmail.com">
						<BiSolidFilePdf />
					</a>
				</icon>
				<icon className="icon">
					<a
						href="https://linkedin.com/in/gabichoi"
						title="LinkedIn"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin />
					</a>
				</icon>
				<icon className="icon">
					<a
						href="https://github.com/gabichoi"
						title="Github"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithubSquare />
					</a>
				</icon>
			</div>
			<div className="container about__container">
				<div className="about-column1">
					<div class="row1 margin-bottom-row">
						<h3>Experience</h3>
						<p>Software Developer</p>
						<p>MEK Review</p>
						<p>2021 - 2023</p>
					</div>
					<div class="row2 margin-bottom-row">
						<h3>Education</h3>
						<p>Cognitive Science</p>
						<p>UC Berkeley</p>
						<p>2015 - 2020</p>
					</div>
				</div>
				<div className="about-column2">
					<h3>Skills</h3>
					<p>
						<b>Programming Languages</b>
					</p>
					<p>Python, C#, Java, JavaScript, HTML, CSS, SQL</p>
					<br></br>
					<p>
						<b>Frameworks and Libraries</b>
					</p>
					<p>React, Pygame, OpenCV, Tensorflow</p>
					<br></br>
					<p>
						<b>Development Tools</b>
					</p>
					<p>Visual Studio, Azure Data Studio, Postman, LabelImg</p>
					<br></br>
					<p>
						<b>Languages Spoken</b>
					</p>
					<p>English, Spanish, Koreang</p>
				</div>
			</div>
		</section>
	);
}

export default AboutComponent;