import Contact from "../Content/contact";
import RouteMap from "../Content/RouteMap";
import Menu from "../Content/Menu";
export default function SectionContent({ topic }) {
	let sectionContent;
	if (topic === "contact") {
		sectionContent = <Contact />;
	} else if (topic === "map") {
		sectionContent = <RouteMap />;
	} else if (topic === "menu") {
		sectionContent = <Menu />;
	}

	return <section>{sectionContent}</section>;
}
