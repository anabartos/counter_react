//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/home.jsx";
let counter = 0;
window.setInterval(() => {
	const Six = Math.floor(counter / 100000);
	const Five = Math.floor(counter / 10000);
	const Four = Math.floor(counter / 1000);
	const Three = Math.floor(counter / 100);
	const Two = Math.floor(counter / 10);
	const One = Math.floor(counter / 1);

	ReactDOM.render(
		<SimpleCounter
			one={One}
			two={Two}
			three={Three}
			four={Four}
			five={Five}
			six={Six}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);

//render your react application
/*ReactDOM.render(
	<SimpleCounter one="0" two="0" three="0" four="0" five="0" six="0" />,
	document.querySelector("#app")
);*/
