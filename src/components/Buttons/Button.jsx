export default function Button({ children, isSelected, ...props }) {
	return (
		<button className={isSelected ? "active" : ""} {...props}>
			{children}
		</button>
	);
}
