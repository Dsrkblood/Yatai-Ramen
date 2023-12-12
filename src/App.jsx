import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	const [isActive, setIsActive] = useState("menu");

	function handleChoseButton(title) {
		setIsActive(title);
	}

	return (
		<>
			<Header />
			<NavButtons changeActive={handleChoseButton} active={isActive} />
			<Content content={isActive} />
			<Footer>Yatai Ramen</Footer>
		</>
	);
}

export default App;
