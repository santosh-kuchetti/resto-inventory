import {
	View,
} from "react-native";
import React, { useState } from "react";
import Create from "./Create";
import AllCategories from "./AllCategories";
import BottomCart from "./BottomCart";

const Inventory = ({ navigation }) => {
	const [categoryData, setCategoryData] = useState("");
	const [quantityData, setQuantityData] = useState("");

	const handleData = (category, quantity) => {
		setCategoryData(category);
		setQuantityData(quantity);
	};

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
			<BottomCart />
		</View>
	);
};

export default Inventory;
