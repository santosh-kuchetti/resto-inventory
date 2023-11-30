import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	SafeAreaView,
	StatusBar,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
	TransitionPresets,
	createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import Notification from "./notification/Notification";
import Profile from "./profile/Profile";

import HomeIcon from "../assets/images/home.png";
import Bag from "../assets/images/bag.png";
import Bell from "../assets/images/bell.png";
import User from "../assets/images/user.png";
import { TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

const Bottombar = ({ navigation }) => {
	const [state, setState] = useState({
		currentIndex: 1,
	});

	const updateState = (data) => setState((state) => ({ ...state, ...data }));

	const { currentIndex } = state;
	function bottomTabBarItem({ index, icon, tabName }) {
		return (
			<>
				{currentIndex == index ? (
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => updateState({ currentIndex: index })}
						style={styles.selectedTabStyle}>
						<Image
							source={icon}
							style={{
								width: 25.0,
								height: 25.0,
								resizeMode: "contain",
								tintColor: "blue",
							}}
						/>
						<Text
							style={{
								marginLeft: 10 - 5.0,
							}}>
							{tabName}
						</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => updateState({ currentIndex: index })}>
						<Image
							source={icon}
							style={{
								width: 25.0,
								height: 25.0,
								resizeMode: "contain",
								tintColor: "black",
							}}
						/>
					</TouchableOpacity>
				)}
			</>
		);
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				translucent={false}
				backgroundColor="blue"
			/>
			<View style={{ flex: 1, backgroundColor: "white" }}>
				{currentIndex == 1 ? (
					<Home navigation={navigation} />
				) : currentIndex == 2 ? (
					<Cart navigation={navigation} />
				) : currentIndex == 3 ? (
					<Notification navigation={navigation} />
				) : (
					<Profile navigation={navigation} />
				)}
				<View style={styles.bottomTabBarStyle}>
					{bottomTabBarItem({
						index: 1,
						icon: HomeIcon,
						tabName: "Home",
					})}
					{bottomTabBarItem({
						index: 2,
						icon: Bag,
						tabName: "Orders",
					})}
					{bottomTabBarItem({
						index: 3,
						icon: Bell,
						tabName: "Trends",
					})}
					{bottomTabBarItem({
						index: 4,
						icon: User,
						tabName: "Profile",
					})}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Bottombar;

const styles = StyleSheet.create({
	bottomTabBarStyle: {
		position: "absolute",
		bottom: 0.0,
		left: 0.0,
		right: 0.0,
		height: 65.0,
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10 * 2.0,
		borderTopColor: "#EEEEEE",
		borderTopWidth: 1.0,
		elevation: 2.0,
	},
	selectedTabStyle: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		backgroundColor: "#ebe4f1",
		borderRadius: 10 * 3.0,
		paddingVertical: 10 + 2.0,
		paddingLeft: 10,
		width: width / 2.7,
	},
	animatedView: {
		backgroundColor: "black",
		position: "absolute",
		bottom: 30,
		alignSelf: "center",
		borderRadius: 10 * 2.0,
		paddingHorizontal: 10 + 5.0,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
