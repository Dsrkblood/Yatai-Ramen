import { COMPLETE_MENU } from "./complete-menu";

const copyArray = [...COMPLETE_MENU];
export default function Menu() {
	let typeOf;
	const menuContainer = copyArray.map((item, indexOf) => {
		if (item.typeOf !== typeOf) {
			typeOf = item.typeOf;
			return (
				<div key={indexOf}>
					<h2>{item.typeOf}</h2>
					{menu()}
				</div>
			);
		} else {
			typeOf = item.typeOf;
		}
	});

	function menu() {
		const box = copyArray.map((item, indexOf) => {
			if (item.typeOf === typeOf) {
				return (
					<div key={indexOf} className='menu'>
						<div className='header'>
							<h3>
								{item.title} {item.vege && <span>Wege</span>}
							</h3>
							<h3>{item.price}</h3>
						</div>
						<p>{item.description}</p>
					</div>
				);
			}
		});
		return box;
	}

	return <>{menuContainer}</>;
}
