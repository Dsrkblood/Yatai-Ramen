export default function Footer({ title }) {
	const getDate = new Date();
	const currentYear = getDate.getFullYear();
	return (
		<footer>
			<p>
				{title} {currentYear}
			</p>
		</footer>
	);
}
