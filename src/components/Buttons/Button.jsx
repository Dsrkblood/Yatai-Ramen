export default function Button({ isSelected, children, ...props }) {
	return (
		<button className={isSelected ? "active" : ""} {...props}>
			{children}
		</button>
	);
}
