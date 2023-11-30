import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
		<View style={styles.wrapper}>
			<Text>Profile</Text>
		</View>
	);
}

export default Profile

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});