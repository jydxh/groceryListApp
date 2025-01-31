import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function ShoppingList({ key, id, item, removeGroceryItemHandler }) {
	return (
		<TouchableOpacity
			key={key}
			activeOpacity={0.2}
			onPress={() => removeGroceryItemHandler(id)}>
			<View style={styles.listContainer}>
				<Text>{item.itemName}: </Text>
				<Text> # &nbsp; {item.itemQuantity}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		backgroundColor: "#ccc",
		padding: 10,
		marginVertical: 10,
		borderColor: "black",
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
});
export default ShoppingList;
