export default function MenuContainer({ contentOf }) {
	// console.log(contentOf);
	// const vege = contentOf.vege && <span>vege</span>;
	return (
		<div className='menu-box'>
			<h3>
				{contentOf.title}
				{/* {vege} */}
			</h3>
			<p>{contentOf.description}</p>
		</div>
	);
}
