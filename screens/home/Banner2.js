import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Banner2 = () => {
	return (
		<View
			style={styles.bannerContainer}>
			<Image
				source={require("../../assets/images/curd.png")}
				style={styles.image}
			/>
		</View>
	);
};

export default Banner2;

const styles = StyleSheet.create({
	bannerContainer: {
		height: 170,
		marginHorizontal: 10,
		paddingHorizontal: 15,
		paddingVertical: 25,
		backgroundColor: "green",
	},
	image: {
		height: 120,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
