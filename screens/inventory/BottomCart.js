import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BottomCart = () => {
	return (
		<View style={styles.bottomContainer}>
			<View style={styles.wrapper}>
				<View style={styles.wrapper}>
					<View style={styles.demoView}></View>
					<View style={{ alignItems: "center" }}>
						<Text>Total Items</Text>
						<Text>30</Text>
					</View>
				</View>
				<View style={styles.viewCartWrapper}>
					<Text style={{ marginRight: 5 }}>View Inventory</Text>
					<Image source={require("../../assets/images/arrowDown.png")} />
				</View>
			</View>
		</View>
	);
};

export default BottomCart;

const styles = StyleSheet.create({
	viewCartWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	demoView: {
		height: 20,
		width: 20,
		backgroundColor: "lightgreen",
		borderRadius: 2,
		marginRight: 5,
	},
	wrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomContainer: {
		position: "absolute",
		bottom: 80,
		width: "100%",
		backgroundColor: "yellow",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "yellow",
		height: 60,
	},
});
