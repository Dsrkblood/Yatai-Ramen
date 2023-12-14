import Contact from "./Contact";
import RouteMap from "./RouteMap";
import Menu from "./Menu";

export default function Content({ content }) {
	let showTitleContent;
	let header;
	if (content === "menu") {
		header = "Menu";
		showTitleContent = <Menu />;
	} else if (content === "contact") {
		header = "Kontakt";
		showTitleContent = <Contact />;
	} else if (content === "map") {
		header = "Mapa";
		showTitleContent = <RouteMap />;
	} else if (content === "special") {
		console.log("In Progres");
	} else {
		console.log(console.error());
	}

	return (
		<main className={content === "menu" ? "disactive" : null}>
			<header>
				<h2>{header} </h2>
			</header>
			{showTitleContent}
		</main>
	);
}
