import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import Content from "./components/Content";

function App() {
	const [isActive, setIsActive] = useState("contact");

	function handleChoseButton(title) {
		setIsActive(title);
	}


	return (
		<>
			<Header />
			<NavButtons changeActive={handleChoseButton} active={isActive} />
			<Content content={isActive}/>
		</>
	);
}

export default App;
