import Button from "./Button";

export default function NavButtons({ changeActive, active }) {
	return (
		<nav>
			<Button active={active === "menu"} onClick={() => changeActive("menu")}>
				Menu
			</Button>
			<Button
				active={active === "contact"}
				onClick={() => changeActive("contact")}>
				Kontakt
			</Button>
			<Button active={active === "map"} onClick={() => changeActive("map")}>
				Mapa
			</Button>
		</nav>
	);
}
