import React, { useState } from "react";
import { Image } from "react-native";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";

const CategoryDetails = ({ navigation, route }) => {
	const [selectedCategoryId, setSelectedCategoryId] = useState(
		route.params.selectedCategoryId
	);
	const categoriesData = route.params.data;

	const handleCategoryPress = (categoryId) => {
		setSelectedCategoryId(categoryId);
	};

	let currentCategoryData = categoriesData.filter(
		(item) => item.id === selectedCategoryId
	);

	const renderItem = ({ item }) => {
		return (
			<View
				style={{
					height: 150,
					width: 160,
					backgroundColor: "lightgray",

					marginHorizontal: 15,
					marginVertical: 10,
					borderRadius: 20,
					justifyContent: "center",
					paddingHorizontal: 10,
				}}>
				<View>
					<Text>{item.category}</Text>
					<Text style={{ fontWeight: "bold" }}>{item.name}</Text>
				</View>
				<Text style={{ marginVertical: 20 }}>25 Kg quantity in pack</Text>
				<View
					style={{
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
					}}>
					<Text>${item.cost}/kg</Text>
					<View
						style={{
							height: 20,
							width: 40,
							borderColor: "green",
							borderWidth: 1,
							borderRadius: 5,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Text>Add</Text>
					</View>
				</View>
			</View>
		);
	};
	return (
		<>
			<Text style={{ fontSize: 18, margin: 10 }}>Categies Details</Text>
			<View
				style={{
					height: 80,
					marginHorizontal: 10,
					backgroundColor: "lightgray",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 20,
					marginTop: 10,
				}}>
				<View style={{ alignItems: "center", flexDirection: "row" }}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<Image source={require("../../assets/images/back.png")} />
					</TouchableOpacity>
					<View style={{ ...styles.categoryItem, marginHorizontal: 5 }}></View>
					<>
						<View style={{ alignItems: "center", flexDirection: "row" }}>
							<Text style={{ marginRight: 5 }}>Categories</Text>
							<Image source={require("../../assets/images/arrowDown.png")} />
						</View>
						<Text style={{ marginTop: 5 }}>563 items</Text>
					</>
				</View>
				<Image
					source={require("../../assets/images/search.png")}
					style={{ height: 30, width: 30 }}
				/>
			</View>
			<View style={styles.container}>
				<ScrollView style={styles.scrollView}>
					{categoriesData.map((category) => (
						<>
							<TouchableOpacity
								key={category.id}
								onPress={() => handleCategoryPress(category.id)}
								style={{ flexDirection: "row", alignItems: "center" }}>
								<View
									style={
										category.id === selectedCategoryId && styles.selectedBorder
									}></View>
								<View style={{ justifyContent: "center" }}>
									<View
										style={[
											styles.categoryItem,
											{ height: 80, width: 80 },
											category.id === selectedCategoryId &&
												styles.selectedCategory,
										]}></View>
								</View>
							</TouchableOpacity>
							<Text
								style={{
									marginHorizontal: 20,
									marginBottom: 10,
								}}>
								{category.category}
							</Text>
						</>
					))}
				</ScrollView>
				<View style={styles.categoryDetails}>
					<FlatList
						data={currentCategoryData[0].items}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	selectedBorder: {
		height: 80,
		width: 5,
		backgroundColor: "green",
	},
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
	},
	scrollView: {
		paddingVertical: 10,
		width: 0,
	},
	categoryItem: {
		backgroundColor: "#e0e0e0",
		borderWidth: 1,
		borderColor: "lightgray",
		margin: 10,
	},
	selectedCategory: {
		backgroundColor: "#e0e0e0",
		borderWidth: 1,
		borderColor: "lightgreen",
		margin: 10,
	},
	categoryDetails: {
		padding: 20,
	},
});

export default CategoryDetails;
