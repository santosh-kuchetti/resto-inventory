import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	FlatList,
} from "react-native";
import React from "react";
import Header from "./Header";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Options from "./Options";

const Home = ({ navigation }) => {
	return (
		<View style={styles.homeContainer}>
			<FlatList
				ListHeaderComponent={
					<>
						<Header />
						<Banner1 />
						<Banner2 />
						<Options navigation={navigation} />
					</>
				}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		backgroundColor: "lightgray",
	},
});
