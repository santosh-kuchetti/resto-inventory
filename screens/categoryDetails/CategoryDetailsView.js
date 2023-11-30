import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Image } from "react-native";

const CategoryDetailsView = ({ currentCategoryData }) => {
	const renderItem = ({ item }) => {
		return (
			<View style={styles.wrapper}>
				<Image
					source={require("../../assets/images/demoImage.png")}
					style={styles.image}
				/>
				<View
					style={{
						top: 15,
					}}>
					<View>
						<Text>{item.category}</Text>
						<Text style={{ fontWeight: "bold" }}>{item.name}</Text>
					</View>
					<Text style={{ marginVertical: 20 }}>25 Kg quantity in pack</Text>
					<View style={styles.addWrapper}>
						<Text>${item.cost}/kg</Text>
						<View style={styles.add}>
							<Text>Add</Text>
						</View>
					</View>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.categoryDetails}>
			<FlatList
				data={currentCategoryData[0].items}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoryDetailsView;

const styles = StyleSheet.create({
	add: {
		height: 20,
		width: 40,
		borderColor: "green",
		borderWidth: 1,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	addWrapper: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	image: { height: 50, width: 50 },
	categoryDetails: {
		flex: 1,
	},
	wrapper: {
		height: 260,
		width: 125,
		backgroundColor: "#fff",
		marginHorizontal: 5,
		borderRadius: 10,
		justifyContent: "center",
		paddingHorizontal: 10,
		marginBottom: 10,
	},
});
