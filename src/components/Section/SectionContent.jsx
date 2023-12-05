import Contact from "../Content/contact";
import RouteMap from "../Content/RouteMap";
export default function SectionContent({ topic }) {
	let sectionContent;
	if (topic === "contact") {
		sectionContent = <Contact />;
	} else if (topic === "map") {
		sectionContent = <RouteMap />;
	} else if (topic === "menu") {
		console.log("menu");
	}

	return <section>{sectionContent}</section>;
}
