import { useState } from "react";
import Button from "../Buttons/Button";
import SectionContent from "./SectionContent";

import "./Section.css";

export default function Section() {
	const [selectedTopic, setSelectedTopic] = useState("contact");

	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
	}

	

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
			<SectionContent topic={selectedTopic}/>
		</>
	);
}
