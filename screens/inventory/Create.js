import { StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const Create = ({ navigation, categoryData, quantityData }) => {
	console.log("catData", categoryData, quantityData);
	const [category, setCategory] = useState("");
	const [quantity, setQuantity] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedUnit, setSelectedUnit] = useState("kg");

	const handleUnitSelect = (unit) => {
		setSelectedUnit(unit);
		setShowDropdown(false);
	};

	useEffect(() => {
		setCategory(categoryData);
		setQuantity(quantityData.toString());
	}, [categoryData, quantityData]);

	return (
		<View>
			<View>
				<View style={styles.headerContainer}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<Image
							source={require("../../assets/images/back.png")}
							style={{ marginRight: 5 }}
						/>
					</TouchableOpacity>
					<Text>Create your Inventory</Text>
				</View>
			</View>
			<View style={styles.createContainer}>
				<View
					style={{
						top: 50,
					}}>
					<TextInput
						style={{
							backgroundColor: "#fff",
							height: 50,
							marginHorizontal: 15,
							borderRadius: 10,
							paddingLeft: 10,
						}}
						placeholder="Category"
						value={category}
						onChangeText={(val) => setCategory(val)}
					/>
					<View style={styles.container}>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder="Quantity"
								value={quantity}
								onChangeText={(val) => setQuantity(val)}
							/>
							<View style={styles.dropdownContainer}>
								{showDropdown ? (
									<View style={styles.dropdown}>
										<TouchableOpacity onPress={() => handleUnitSelect("kg")}>
											<Text style={styles.dropdownText}>kg</Text>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => handleUnitSelect("liter")}>
											<Text style={styles.dropdownText}>liter</Text>
										</TouchableOpacity>
									</View>
								) : (
									<Text>{selectedUnit}</Text>
								)}
								<TouchableWithoutFeedback
									onPress={() => setShowDropdown(!showDropdown)}>
									<Image
										source={require("../../assets/images/arrowDown.png")}
										style={styles.icon}
									/>
								</TouchableWithoutFeedback>
							</View>
						</View>
					</View>
					<TouchableOpacity style={styles.addItemsContainer}>
						<Text>Add Items</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default memo(Create);

const styles = StyleSheet.create({
	addItemsContainer: {
		top: 20,
		backgroundColor: "yellow",
		height: 50,
		marginHorizontal: 15,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 10,
	},
	dropdownContainer: { flexDirection: "row", alignItems: "center" },
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "row",
		backgroundColor: "#fff",
		height: 50,
		marginHorizontal: 15,
		marginVertical: 20,
		borderRadius: 10,
		paddingLeft: 10,
		paddingRight: 30,
		alignItems: "center",
	},
	input: {
		flex: 1,
	},
	createContainer: {
		backgroundColor: "lightgray",
		height: 300,
		paddingVertical: 10,
		marginHorizontal: 10,
	},
	headerContainer: {
		backgroundColor: "#fff",
		height: 60,
		marginTop: 10,
		paddingLeft: 20,
		alignItems: "center",
		flexDirection: "row",
	},
	dropdown: {
		position: "absolute",
		top: 0,
		left: -35,
		backgroundColor: "white",
		borderRadius: 5,
		elevation: 5,
		padding: 10,
		zIndex: 1000,
	},
	dropdownText: {
		fontSize: 16,
		paddingVertical: 5,
	},
	icon: {
		height: 30,
		width: 30,
		marginLeft: 10,
	},
});
