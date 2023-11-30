import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { categories } from "../../constants/Data";
import Create from "./Create";
import AllCategories from "./AllCategories";
import BottomCart from "./BottomCart";

const Inventory = ({ navigation }) => {

	const [categoryData, setCategoryData] = useState('')
	const[quantityData,setQuantityData] = useState('')

	const handleData = (category,quantity) => {
		setCategoryData(category)
		setQuantityData(quantity)
	}

	return (
		<View>
			<Create
				navigation={navigation}
				categoryData={categoryData}
				quantityData={quantityData}
			/>
			<AllCategories
				navigation={navigation}
				handleData={handleData}
			/>
			<BottomCart/>
		</View>
	);
};

export default Inventory;

const styles = StyleSheet.create({
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
	icon: {
		height: 30,
		width: 30,
		marginLeft: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "black",
		padding: 20,
		borderRadius: 10,
		zIndex: 1,
	},
	dropdownText: {
		fontSize: 16,
		paddingVertical: 5,
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
});
