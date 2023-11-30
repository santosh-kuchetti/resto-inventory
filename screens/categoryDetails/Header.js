import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Header = ({ navigation, allItemsCount }) => {
	return (
		<View>
			<View style={styles.Container}>
				<View style={styles.wrapper}>
					<TouchableOpacity onPress={() => navigation.pop()}>
						<Image source={require("../../assets/images/back.png")} />
					</TouchableOpacity>
					<View style={{ ...styles.categoryItem, marginHorizontal: 5 }}></View>
					<View>
						<View style={styles.wrapper}>
							<Text style={styles.text}>Categories</Text>
							<Image
								source={require("../../assets/images/arrowDown.png")}
								style={styles.image1}
							/>
						</View>
						<Text style={styles.text}>{allItemsCount} items</Text>
					</View>
				</View>
				<Image
					source={require("../../assets/images/search.png")}
					style={styles.image2}
				/>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	image1: {
		height: 20,
		width: 20,
	},
	image2: {
		height: 30,
		width: 30,
	},
	text: {
		marginTop: 5,
	},
	Container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingVertical: 20,
	},
	wrapper: { alignItems: "center", flexDirection: "row" },
	categoryItem: {
		backgroundColor: "#e0e0e0",
		borderWidth: 1,
		borderColor: "lightgray",
		// margin: 10,
		height: 60,
		width: 60,
	},
});
