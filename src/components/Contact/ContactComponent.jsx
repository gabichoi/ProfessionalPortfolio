import React from 'react'
import "./ContactStyle.css"
import { useRef } from 'react';
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs
			.sendForm(
				"service_5bc20tq",
				"template_294rqyd",
				form.current,
				"Ibut_fQ27LyjECbxl"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			e.target.reset()
  };
  return (
		<section id="contact">
			<hr className="divider" />
			<h2>CONTACT ME</h2>
			<div className="container container__contact">
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Write your full name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Write your email address"
						required
					/>
					<textarea
						name="message"
						rows={7}
						placeholder="Write your message"
						required
					></textarea>
					<div className="contact__submit">
						<button type="submit" className="btn">
							SEND
						</button>
					</div>
				</form>
			</div>
		</section>
	);
  
}

export default ContactComponent;