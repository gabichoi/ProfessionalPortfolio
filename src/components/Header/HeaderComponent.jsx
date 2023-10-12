import React from 'react'
import profile from '../../assets/profile.png'
// import HeaderSocials from "./HeaderSocials";
import './HeaderStyling.css';

const HeaderComponent = () => {
  return (
		<section id="header">
			<hr className="divider" />
			<div className="container header__container">
				<h1>GABI CHOI</h1>
				<div className="profile-picture">
					<img src={profile} alt="profile" />
				</div>
				<h2>Professional Portfolio</h2>
				<h3>Software Engineer</h3>
			</div>
		</section>
	);
}

export default HeaderComponent;