function ItemFlag({ item, onClick }) {
	return (
		<div className="itemFlag" onClick={() => onClick(item)}>
			<img src={item.flags.svg} alt={`flag of ${item.name.common}`} />
			{item.name.common}
		</div>
	);
}

export default ItemFlag;
