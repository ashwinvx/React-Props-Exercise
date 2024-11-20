function InventoryItem({ name, type, quantity, price }) {
	return (
		<div>
			<h2>{name} ({type})</h2>
			{(quantity < 5 || quantity == undefined) && <Message>⚠️ Low Stock! {quantity ? quantity : 0} remained</Message>}
			{quantity * price > 1000 && <Message>💰 High value - consider extra protection!</Message>}
		</div>
	);
}
