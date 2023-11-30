import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Options = ({navigation}) => {
	return (
		<View>
			<View
				style={{
					...styles.optionContainer,
					marginTop: 20,
				}}>
				<TouchableOpacity
					onPress={() => navigation.push("Inventory")}
					style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require("../../assets/images/inventory.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.push("inventory")}
					style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require("../../assets/images/discover.png")}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.optionContainer}>
				<TouchableOpacity
					onPress={() => navigation.push("inventory")}
					style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require("../../assets/images/menu.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.push("inventory")}
					style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require("../../assets/images/marketing.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Options;

const styles = StyleSheet.create({
	optionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},
	image: {
		height: 80,
		width: 80,
	},
	imageContainer: {
		backgroundColor: "#fff",
		height: 170,
		width: 160,
		marginBottom: 20,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
});
