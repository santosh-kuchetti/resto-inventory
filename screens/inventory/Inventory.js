import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { categories } from "../../constants/Data";

const Inventory = ({ navigation }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedUnit, setSelectedUnit] = useState("kg");

	const [category, setCategory] = useState('')
	const[quantity,setQuantity] = useState(null)

	const handleUnitSelect = (unit) => {
		setSelectedUnit(unit);
		setShowDropdown(false);
	};

	let categoryData = categories;

	function create() {
		return (
			<View>
				<View>
					<View
						style={{
							backgroundColor: "#fff",
							height: 60,
							marginTop: 10,
							paddingLeft: 20,
							alignItems: "center",
							flexDirection:'row'

						}}>
							<TouchableOpacity onPress={() => navigation.pop()}>
							<Image source={require("../../assets/images/back.png")} style={{marginRight:5}} />
							</TouchableOpacity>
						<Text>Create your Inventory</Text>
					</View>
				</View>
				<View
					style={{
						backgroundColor: "lightgray",
						height: 300,
						paddingVertical: 10,
						marginHorizontal: 10,
					}}>
					<View
						style={{
							top: 50,
						}}>
						<TextInput
							style={{
								backgroundColor: "#fff",
								height: 50,
								marginHorizontal: 15,
								borderRadius: 10,
								paddingLeft: 10,
							}}
							placeholder="Category"
							value={category}
						/>
						<View style={styles.container}>
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.input}
									placeholder="Quantity"
									value={quantity}
								/>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									{showDropdown ? (
										<View style={styles.dropdown}>
											<TouchableOpacity onPress={() => handleUnitSelect("kg")}>
												<Text style={styles.dropdownText}>kg</Text>
											</TouchableOpacity>
											<TouchableOpacity
												onPress={() => handleUnitSelect("liter")}>
												<Text style={styles.dropdownText}>liter</Text>
											</TouchableOpacity>
											{/* Add more options as needed */}
										</View>
									) : (
										<Text>{selectedUnit}</Text>
									)}
									<TouchableWithoutFeedback
										onPress={() => setShowDropdown(!showDropdown)}>
										<Image
											source={require("../../assets/images/arrowDown.png")}
											style={styles.icon}
										/>
									</TouchableWithoutFeedback>
								</View>
							</View>
						</View>
						<TouchableOpacity
							style={{
								top: 20,
								backgroundColor: "yellow",
								height: 50,
								marginHorizontal: 15,
								borderRadius: 10,
								alignItems: "center",
								justifyContent: "center",
								zIndex: 10,
							}}>
							<Text>Add Items</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

	function allCategories() {
		const renderItem = ({ item }) => {
			return (
				<TouchableOpacity
					onPress={() =>
						{navigation.push("CategoryDetails", {
							selectedCategoryId: item.id,
							data: categoryData,
						})
						setCategory(item.category)
						setQuantity(Math.floor(Math.random() * 10) + 1);
					}
					}
					style={{
						backgroundColor: "lightgreen",
						height: 120,
						width: 100,
						marginHorizontal: 15,
						marginVertical: 10,
						borderRadius: 20,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Image
						source={require("../../assets/images/demoImage.png")}
						style={{ height: 60, width: 60 }}
					/>
					<Text>{item.category}</Text>
				</TouchableOpacity>
			);
		};
		return (
			<View
				style={{
					width: "100%",
					marginTop: 20,
				}}>
				<View>
					<Text
						style={{
							marginHorizontal: 10,
							marginBottom: 10,
						}}>
						Choose by category
					</Text>
				</View>
				<FlatList
					data={categoryData}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					numColumns={3}
				/>
			</View>
		);
	}

	function bottomCart() {
		return (
			<View
				style={{
					position: "absolute",
					bottom: 80,
					width: "100%",
					backgroundColor: "yellow",
					paddingHorizontal: 15,
					paddingVertical: 10,
					borderTopWidth: 1,
					borderTopColor: "yellow",
					height: 60,
				}}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<View
							style={{
								height: 20,
								width: 20,
								backgroundColor: "lightgreen",
								borderRadius: 2,
								marginRight: 5,
							}}></View>
						<View style={{ alignItems: "center" }}>
							<Text>Total Items</Text>
							<Text>30</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<Text style={{ marginRight: 5 }}>View Inventory</Text>
						<Image source={require("../../assets/images/arrowDown.png")} />
					</View>
				</View>
			</View>
		);
	}

	return (
		<View>
			{create()}
			{allCategories()}
			{bottomCart()}
		</View>
	);
};

export default Inventory;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "row",
		backgroundColor: "#fff",
		height: 50,
		marginHorizontal: 15,
		marginVertical: 20,
		borderRadius: 10,
		paddingLeft: 10,
		paddingRight: 30,
		alignItems: "center",
	},
	input: {
		flex: 1,
	},
	icon: {
		height: 30,
		width: 30,
		marginLeft: 10,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "black",
		padding: 20,
		borderRadius: 10,
		zIndex: 1,
	},
	dropdownText: {
		fontSize: 16,
		paddingVertical: 5,
	},
	dropdown: {
		position: "absolute",
		top: 0,
		left: -35,
		backgroundColor: "white",
		borderRadius: 5,
		elevation: 5,
		padding: 10,
		zIndex: 1000,
	},
	dropdownText: {
		fontSize: 16,
		paddingVertical: 5,
	},
});
