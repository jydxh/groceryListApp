import React, { useState } from "react";
import { Button, Modal, TextInput, View, StyleSheet } from "react-native";

function GroceryItemInput({ visible, setVisible, onAddItem }) {
	const [inputValue, setInputValue] = useState("");
	const [counterInput, setCounterInput] = useState("");
	const handleAdd = () => {
		if (!inputValue.trim() || !counterInput.trim()) {
			alert("input cannot be empty string for both two fields");
			return;
		}
		if (!Number(counterInput.trim())) {
			alert("the second input must be a numeric text!");
			return;
		}
		setInputValue("");
		setCounterInput("");
		onAddItem({ itemName: inputValue, itemQuantity: counterInput });
		setVisible(false);
	};
	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Grocery Item"
					onChangeText={setInputValue}
					value={inputValue}
				/>
				<TextInput
					style={styles.input}
					placeholder="Grocery Item Counter"
					onChangeText={setCounterInput}
					value={counterInput}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.btn}>
						<Button
							color="red"
							title="CANCEL"
							onPress={() => {
								setVisible(false);
							}}
						/>
					</View>
					<View style={styles.btn}>
						<Button title="ADD" style={styles.btn} onPress={handleAdd} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		borderRadius: 20,
		borderColor: "black",
		borderWidth: 1,
		width: "80%",
		marginBottom: 20,
		paddingLeft: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		width: "60%",
		gap: 20,
	},
	btn: {
		width: "40%",
		borderRadius: 20,
		overflow: "hidden",
	},
});

export default GroceryItemInput;
