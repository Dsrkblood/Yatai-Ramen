import { useState } from "react";
import Button from "./Button";

export default function NavButtons() {
	const [isActive, setIsActive] = useState("contact");

	function handleChoseButton(title) {
		setIsActive(title);
		console.log(title);
	}
	return (
		<nav>
			<Button
				active={isActive === "menu"}
				onClick={() => handleChoseButton("menu")}>
				Menu
			</Button>
			<Button
				active={isActive === "contact"}
				onClick={() => handleChoseButton("contact")}>
				Kontakt
			</Button>
			<Button
				active={isActive === "map"}
				onClick={() => handleChoseButton("map")}>
				Mapa
			</Button>
		</nav>
	);
}
