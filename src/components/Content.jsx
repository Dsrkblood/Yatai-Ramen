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
	} else {
		console.log("error");
	}

	return (
		<main>
			<header>
				<h2>{header} </h2>
			</header>
			<section className={content === "menu" ? "menu-main" : "menu-other"}>
				{showTitleContent}
			</section>
		</main>
	);
}
