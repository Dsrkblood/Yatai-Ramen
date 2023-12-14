import Button from "./Button";

export default function NavButtons({ changeActive, active }) {
	return (
		<nav>
			<div className='top'>
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
			</div>
			{/* 
			Adding a button when there is a special/weekend offer */}

			{/* <div className='bottom'>
				<Button
					active={active === "special"}
					onClick={() => changeActive("special")}>
					Specjalne
				</Button>
			</div> */}
		</nav>
	);
}
