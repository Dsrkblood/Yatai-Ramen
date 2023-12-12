export default function Contact() {
	return (
		<div className='contact-info'>
			<p>Emancypantek 4</p>
			<p>05-804 Pruszków</p>
			<p>
				<a href='tel:666 663 641'>
					<i className='fa-solid fa-phone'></i> 666 663 641{" "}
				</a>
			</p>
			<p>
				<a href='mailto:restauracja@yatairamen.pl'>
					<i className='fa-solid fa-envelope'></i> restauracja@yatairamen.pl{" "}
				</a>
			</p>

			<div className='social-media'>
				<a href='https://www.facebook.com/yatairamen.pruszkow'>
					<i className='fa-brands fa-square-facebook facebook'></i>
				</a>
				<a href='https://www.instagram.com/yatai.ramen_restauracja?fbclid=IwAR13YMERvf6qgaAHeodh_uRfeUwieBYgwpK6mTfUSm1sCPXoTtzpbjJe8Gg'>
					<i className='fa-brands fa-instagram instagram'></i>
				</a>
			</div>
			<div className='opening'>
				<p>pon: nieczynne</p>
				<p>wt - sob: 12-22</p>
				<p>ndz: 12-20</p>
			</div>
		</div>
	);
}
