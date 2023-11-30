import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import CategoriesView from "./CategoriesView";
import CategoryDetailsView from "./CategoryDetailsView";

const CategoryDetails = ({ navigation, route }) => {
	const handleData = route.params?.handleData;
	const [selectedCategoryId, setSelectedCategoryId] = useState(
		route.params.selectedCategoryId
	);
	const categoriesData = route.params.data;

	let allItemsCount = categoriesData.reduce(
		(acc, item) => acc + item.items.length,
		0
	);

	const handleCategoryPress = (categoryId) => {
		setSelectedCategoryId(categoryId);
	};

	let currentCategoryData = categoriesData.filter(
		(item) => item.id === selectedCategoryId
	);

	return (
		<View style={{ backgroundColor: "lightgray", marginHorizontal: 5 }}>
			<View>
				<Text style={{ fontSize: 18, margin: 10 }}>Categies Details</Text>
				<Header
					navigation={navigation}
					allItemsCount={allItemsCount}
				/>
				<View style={styles.container}>
					<CategoriesView
						categoriesData={categoriesData}
						handleCategoryPress={handleCategoryPress}
						handleData={handleData}
						selectedCategoryId={selectedCategoryId}
					/>
					<CategoryDetailsView currentCategoryData={currentCategoryData} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginTop: 10,
	},
});

export default CategoryDetails;
