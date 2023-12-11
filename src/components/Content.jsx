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

	const arrowShow = content === "menu" && (
		<a href='#top'>
			<i className='fa-regular fa-circle-up'></i>
		</a>
	);

	return (
		<main>
			<header>
				<h2>{header} </h2>
				{arrowShow}
			</header>
			<section></section>
		</main>
	);
}
