export default function Button({ children, active, ...props }) {
	return (
		<button className={active ? "active" : null} {...props}>
			{children}
		</button>
	);
}
