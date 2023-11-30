import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
		<View style={styles.wrapper}>
			<Text>Cart</Text>
		</View>
	);
}

export default Cart

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});