import React from "react";

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17091.507052555353!2d-80.19970371717294!3d25.769019246581855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62da60c3e0a16ae8!2sOlympia+Theater!5e0!3m2!1sen!2sus!4v1545997898728"
				width="100%"
				height="500px"
				frameBorder="0"
				allowFullScreen
			/>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
