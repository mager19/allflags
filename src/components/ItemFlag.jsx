function ItemFlag({ item }) {
	return (
		<div className="itemFlag">
			<img src={item.flags.svg} alt={`flag of ${item.name.common}`} />
			{item.name.common}
		</div>
	);
}

export default ItemFlag;
