import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col clock">
					<i className="far fa-clock" />
				</div>
				<div className="col six">{props.six}</div>
				<div className="col five">{props.five}</div>
				<div className="col four">{props.four}</div>
				<div className="col three">{props.three}</div>
				<div className="col two">{props.two}</div>
				<div className="col one">{props.one}</div>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	six: PropTypes.number,
};
export default SimpleCounter;
