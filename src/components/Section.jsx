import { useState } from "react";
import Button from "./Buttons/Button";
import Contact from "./Content/contact";
import Footer from "./Footer";
import "./Section.css";

export default function Section() {
	const [selectedTopic, setSelectedTopic] = useState("menu");

	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
	}

	let sectionContent = <Contact />;
	return (
		<>
			<nav>
				<ul>
					<Button
						isSelected={selectedTopic === "menu"}
						onClick={() => handleSelect("menu")}>
						Menu
					</Button>
					<Button
						isSelected={selectedTopic === "contact"}
						onClick={() => handleSelect("contact")}>
						Kontakt
					</Button>
					<Button
						isSelected={selectedTopic === "map"}
						onClick={() => handleSelect("map")}>
						Mapa
					</Button>
				</ul>
			</nav>
			<section>{sectionContent}</section>
			<Footer title="Yatai Ramen"/>
		</>
	);
}
