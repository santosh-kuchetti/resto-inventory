import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { categories } from "../../constants/Data";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const AllCategories = ({ navigation, handleData }) => {
	let categoryData = categories;
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.push("CategoryDetails", {
						selectedCategoryId: item.id,
						data: categoryData,
					});
					handleData(item.category, item.items?.length);
				}}
				style={styles.listContainer}>
				<Image
					source={require("../../assets/images/demoImage.png")}
					style={styles.image}
				/>
				<Text>{item.category}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.categoryContainer}>
			<View>
				<Text style={styles.header}>Choose by category</Text>
			</View>
			<FlatList
				data={categoryData}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				numColumns={3}
			/>
		</View>
	);
};

export default AllCategories;

const styles = StyleSheet.create({
	header: {
		marginHorizontal: 10,
		marginBottom: 10,
	},
	categoryContainer: {
		width: "100%",
		marginTop: 20,
	},
	image: { height: 60, width: 60 },
	listContainer: {
		backgroundColor: "lightgreen",
		height: 120,
		width: 100,
		marginHorizontal: 15,
		marginVertical: 10,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
});
