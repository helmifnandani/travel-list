export default function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		);
	}
	const totalItems = items.length;
	const totalPackedItems = items.filter((item) => item.packed).length;
	const packedRate =
		items.length > 0 ? (totalPackedItems / totalItems) * 100 : 0;
	return (
		<footer className="stats">
			<em>
				{packedRate === 100
					? "You got everything! Ready to go ✈"
					: `You have ${totalItems} items on your list, and you already packed
				${totalPackedItems} (${packedRate}%)`}
			</em>
		</footer>
	);
}
