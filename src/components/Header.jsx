import YataiRamen from "./img/LogoYataiRamen.png";

export default function Header() {
	return (
		<header id='top'>
			<a
				href='https://www.facebook.com/yatairamen.pruszkow'
				rel='noreferrer'
				target='_blank'>
				<img
					className='logo'
					src={YataiRamen}
					alt='Logo restauracji Yatai Ramen'
				/>
			</a>
		</header>
	);
}
