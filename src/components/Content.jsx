export default function Content({ content }) {
	let header;
	if (content === "menu") {
		header = "Menu";
	} else if (content === "contact") {
		header = "Kontakt";
	} else if (content === "map") {
		header = "Mapa";
	} else {
		console.log("error");
	}
	return (
		<main>
			<header>
				<h2>{header} </h2>
				<a href='#top'>
					<i class='fa-regular fa-circle-up'></i>
				</a>
			</header>
			<section></section>
		</main>
	);
}
