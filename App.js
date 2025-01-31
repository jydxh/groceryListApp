import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	FlatList,
} from "react-native";
import GroceryItemInput from "./components/GroceryItemInput";
import ShoppingList from "./components/ShoppingList";

export default function App() {
	const [isAddMore, setIsAddMore] = useState(false);
	const [shoppingList, setShoppingList] = useState([]);

	const addGroceryItemHandler = ({ itemName, itemQuantity }) => {
		setShoppingList(prev => {
			return [
				...prev,
				{ key: Math.random().toString(), itemName, itemQuantity },
			];
		});
	};

	const removeGroceryItemHandler = key => {
		setShoppingList(prev => {
			return prev.filter(item => item.key !== key);
		});
	};

	return (
		<View style={styles.container}>
			<Button
				title="Add New Item"
				onPress={() => {
					setIsAddMore(true);
				}}
			/>
			<GroceryItemInput
				visible={isAddMore}
				setVisible={setIsAddMore}
				onAddItem={addGroceryItemHandler}
			/>

			{/* 	{shoppingList.map(item => {
				return (
					<TouchableOpacity key={item.key} activeOpacity={0.2}>
						<View style={styles.listContainer}>
							<Text onPress={() => removeGroceryItemHandler(item.key)}>
								{item.value}
							</Text>
						</View>
					</TouchableOpacity>
				);
			})} */}
			<StatusBar style="auto" />
			<FlatList
				data={shoppingList}
				extraData={shoppingList}
				renderItem={itemData => (
					<ShoppingList
						id={itemData.item.key}
						key={itemData.item.key}
						item={itemData.item}
						removeGroceryItemHandler={removeGroceryItemHandler}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 100,
	},
	listContainer: {
		backgroundColor: "#ccc",
		padding: 10,
		borderRadius: 10,
		marginTop: 10,
		borderColor: "black",
		borderWidth: 1,
	},
});
