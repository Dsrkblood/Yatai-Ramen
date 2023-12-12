import MenuContainer from "./MenuContainer";
import { COMPLETE_MENU } from "./complete-menu";

const copyArray = [...COMPLETE_MENU];

export default function Menu() {
	const menuContainer = copyArray.map((item, indexOf) => (
		<MenuContainer key={indexOf} contentOf={item} />
	));
	return <>{menuContainer}</>;
}
