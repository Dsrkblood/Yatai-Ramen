import { COMPLETE_MENU } from "./complete-menu";

const copyArray = [...COMPLETE_MENU];
export default function Menu() {
	let typeOf;

	function checkTypeOf(item){
		let mainTitle;
		if(item === 'appetizers'){
			mainTitle = "Przystawki"
		}else if(item === 'main_course'){
			mainTitle = "Dania główne"
		}else if(item === 'dessert'){
			mainTitle = 'Desery'
		}else{
			mainTitle = item
		}
		return mainTitle;
	}

	const menuContainer = copyArray.map((item, indexOf) => {
		if (item.typeOf !== typeOf) {
			typeOf = item.typeOf;
			return (
				<div key={indexOf}>
					<h2>{checkTypeOf(item.typeOf)}</h2>
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

	return (
		<section>
			<div className='menu-container'>{menuContainer}</div>
		</section>
	);
}
