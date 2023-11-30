import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bottombar from "./screens/Bottombar";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import {
	TransitionPresets,
	createStackNavigator,
} from "@react-navigation/stack";
import { LogBox } from "react-native";
import Inventory from "./screens/inventory/Inventory";
import CategoryDetails from "./screens/categoryDetails/CategoryDetails";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
				}}>
				<Stack.Screen
					name="BottomTabBar"
					component={Bottombar}
				/>
				<Stack.Screen
					name="Inventory"
					component={Inventory}
				/>
				<Stack.Screen
					name="CategoryDetails"
					component={CategoryDetails}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
