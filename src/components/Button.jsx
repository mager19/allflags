function Button({ name, status, onClick, id }) {
	const selected =
		status === "selected"
			? "button__region button__region__selected"
			: "button__region ";
	return (
		<button className={selected} onClick={() => onClick(id)}>
			{name}
		</button>
	);
}

export default Button;
