import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const Header = () => {

		return (
			<View style={styles.header}>
				<View
					style={styles.headerContainer}>
					<Image
						source={require("../../assets/images/sideBar.png")}
						style={styles.image}
					/>
					<Image
						source={require("../../assets/images/customerSupport.png")}
						style={styles.image}
					/>
				</View>
			</View>
		);
 
}

export default Header

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
		alignItems: "center",
		top: 20,
	},
	image: {
		height: 25,
		width: 25,
	},
	header: {
		height: 60,
		backgroundColor: "yellow",
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		marginHorizontal: 10,
	},
});