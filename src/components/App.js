import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "Charger", quantity: 12, packed: true },
// ];

export default function App() {
	const [listItems, setListItems] = useState([]);
	function handleAddItems(newItem) {
		// Ini nggak boleh karena ini mutate state yang asli, sedangkan di react nggak boleh mutate state, jadi harus bikin array baru
		// setListItems((item) => item.push(item));

		// bikin array barunya pakai destructure, terus tambah array yang mau di push, jadi ini return array baru
		setListItems((items) => [...items, newItem]);
	}

	function handleDeleteItem(id) {
		setListItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setListItems((items) =>
			// REMEMBER: Updatenya nggak boleh mutable, jadi harus di destructure dulu, yang ini salah
			// items.map((item) => (item.packed = item.id === id))
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearItem() {
		if (listItems.length === 0) return;
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);

		confirmed && setListItems((items) => []);
		// setListItems([]); gini juga bisa
	}

	return (
		<div className="app">
			<Logo />
			{/* apapun bisa dilempar sebagai props termasuk function */}
			<Form onAddItems={handleAddItems} items={listItems} />
			<PackingList
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearItem={handleClearItem}
				items={listItems}
			/>
			<Stats items={listItems} />
		</div>
	);
}
