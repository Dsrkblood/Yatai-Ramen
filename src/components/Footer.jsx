export default function Footer() {
	const data = new Date().getFullYear;

	return (
		<footer>
			<p>{data}</p>
		</footer>
	);
}
