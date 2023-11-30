import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Banner1 = () => {
	return (
		<View style={styles.bannerContainer}>
			<View>
				<Text style={styles.bannerColor}>Next Order Scheduled</Text>
				<View style={styles.dateContainer}>
					<Text>20 June 2023</Text>
				</View>
				<View style={styles.alarmContainer}>
					<Image
						source={require("../../assets/images/alarm.png")}
						style={styles.clock}
					/>
					<Text>10:30 Am | </Text>
					<Text>Tuesday</Text>
				</View>
			</View>
			<View style={styles.divider}></View>
			<Image
				source={require("../../assets/images/vegbag.png")}
				style={styles.vegbag}
			/>
		</View>
	);
};

export default Banner1;

const styles = StyleSheet.create({
	bannerColor: { color: "red", fontWeight: "bold" },
	dateContainer: {
		backgroundColor: "lightgreen",
		paddingHorizontal: 15,
		paddingVertical: 10,
		alignItems: "center",
		width: 125,
		borderRadius: 10,
		marginVertical: 10,
	},
	alarmContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	clock: {
		height: 20,
		width: 20,
	},
	divider: {
		height: 120,
		width: 3,
		backgroundColor: "green",
		marginHorizontal: 30,
	},
	vegbag: {
		height: 120,
		width: 120,
	},
	bannerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: "white",
	},
});
