import YataiRamen from "./img/LogoYataiRamen.png";
import "./Header.css";

export default function Header() {
	return (
		<header className='header'>
			<a
				href='https://www.facebook.com/yatairamen.pruszkow'
				rel='noreferrer'
				target='_blank'>
				<img
					className='header-logo'
					src={YataiRamen}
					alt='Logo restauracji Yatai Ramen'
				/>
			</a>
		</header>
	);
}
