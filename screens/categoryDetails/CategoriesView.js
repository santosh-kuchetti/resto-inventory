import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const CategoriesView = ({
	categoriesData,
	handleCategoryPress,
	handleData,
	selectedCategoryId,
}) => {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
				{categoriesData.map((category) => (
					<>
						<TouchableOpacity
							key={category.id}
							onPress={() => {
								handleCategoryPress(category.id);
								handleData(category.category, category.items?.length);
							}}
							style={styles.wrapper}>
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
						<Text style={styles.category}>{category.category}</Text>
					</>
				))}
			</ScrollView>
		</View>
	);
};

export default CategoriesView;

const styles = StyleSheet.create({
	container: { width: 110, backgroundColor: "#fff", borderRadius: 10 },
	scrollView: {
		paddingVertical: 10,
	},
	wrapper: { flexDirection: "row", alignItems: "center" },
	selectedBorder: {
		height: 80,
		width: 5,
		backgroundColor: "green",
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
	category: {
		marginHorizontal: 20,
		marginBottom: 10,
	},
});
