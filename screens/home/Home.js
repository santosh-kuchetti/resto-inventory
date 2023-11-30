import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	FlatList,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
	function header() {
		return (
			<View style={styles.header}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 20,
						alignItems: "center",
						top: 20,
					}}>
					<Image
						source={require("../../assets/images/sideBar.png")}
						style={{ height: 25, width: 25 }}
					/>
					<Image
						source={require("../../assets/images/customerSupport.png")}
						style={{ height: 25, width: 25 }}
					/>
				</View>
			</View>
		);
	}

	function banner1() {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					marginHorizontal: 10,
					paddingVertical: 10,
					backgroundColor: "white",
				}}>
				<View>
					<Text style={{ color: "red", fontWeight: "bold" }}>
						Next Order Scheduled
					</Text>
					<View
						style={{
							backgroundColor: "lightgreen",
							paddingHorizontal: 15,
							paddingVertical: 10,
							alignItems: "center",
							width: 125,
							borderRadius: 10,
							marginVertical: 10,
						}}>
						<Text>20 June 2023</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Image
							source={require("../../assets/images/alarm.png")}
							style={{ height: 20, width: 20 }}
						/>
						<Text>10:30 Am | </Text>
						<Text>Tuesday</Text>
					</View>
				</View>
				<View
					style={{
						height: 120,
						width: 3,
						backgroundColor: "green",
						marginHorizontal: 30,
					}}></View>
				<Image
					source={require("../../assets/images/vegbag.png")}
					style={{ height: 120, width: 120 }}
				/>
			</View>
		);
	}

	function banner2() {
		return (
			<View
				style={{
					height: 170,
					marginHorizontal: 10,
					paddingHorizontal: 15,
					paddingVertical: 25,
					backgroundColor: "green",
				}}>
				<Image
					source={require("../../assets/images/curd.png")}
					style={{
						height: 120,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
				/>
			</View>
		);
	}

	function options() {
		return (
			<View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 20,
						marginTop: 20,
					}}>
					<TouchableOpacity
						onPress={() => navigation.push("Inventory")}
						style={{
							backgroundColor: "#fff",
							height: 170,
							width: 160,
							marginBottom: 20,
							borderRadius: 20,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Image
							style={{
								height: 80,
								width: 80,
							}}
							source={require("../../assets/images/inventory.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.push("inventory")}
						style={{
							backgroundColor: "#fff",
							height: 170,
							width: 160,
							marginBottom: 20,
							borderRadius: 20,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Image
							style={{
								height: 80,
								width: 80,
							}}
							source={require("../../assets/images/discover.png")}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginHorizontal: 20,
					}}>
					<TouchableOpacity
						onPress={() => navigation.push("inventory")}
						style={{
							backgroundColor: "#fff",
							height: 170,
							width: 160,
							marginBottom: 20,
							borderRadius: 20,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Image
							style={{
								height: 80,
								width: 80,
							}}
							source={require("../../assets/images/menu.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.push("inventory")}
						style={{
							backgroundColor: "#fff",
							height: 170,
							width: 160,
							marginBottom: 20,
							borderRadius: 20,
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Image
							style={{
								height: 80,
								width: 80,
							}}
							source={require("../../assets/images/marketing.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	return (
		<View style={{ flex: 1, backgroundColor: "lightgray" }}>
			<FlatList
				ListHeaderComponent={
					<>
						{header()}
						{banner1()}
						{banner2()}
						{options()}
					</>
				}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	header: {
		height: 60,
		backgroundColor: "yellow",
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
		marginHorizontal: 10,
	},
});
