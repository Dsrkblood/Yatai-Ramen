import "./Footer.css";
export default function Footer({ title }) {
	const getDate = new Date();
	const currentYear = getDate.getFullYear();
	return (
		<footer>
			<p>
				{title} &copy; {currentYear}
			</p>
		</footer>
	);
}
