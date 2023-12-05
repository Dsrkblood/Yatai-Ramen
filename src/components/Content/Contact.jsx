import "./Content.css";
export default function Contact() {
	return (
		<>
			<h2>Kontakt</h2>
			<ul>
				<li>ul. Emancypantek 4</li>
				<li>05-804 Pruszków</li>
				<li>
					<a href='tel:666 663 641'>
						<i className='fa-solid fa-phone'></i> 666 663 641
					</a>
				</li>
				<li>
					<a href='mailto:restauracja@yatairamen.pl'>
						<i className='fa-solid fa-envelope'></i> restauracja@yatairamen.pl
					</a>
				</li>
			</ul>
			<div className='social-media'>
				<a
					className='facebook'
					rel='noreferrer'
					target='_blank'
					href='https://www.facebook.com/yatairamen.pruszkow'>
					<i className='fa-brands fa-square-facebook facebook'></i>
				</a>
				<a className='instagram' href='#instagram'>
					<i className='fa-brands fa-instagram'></i>
				</a>
			</div>
		</>
	);
}
