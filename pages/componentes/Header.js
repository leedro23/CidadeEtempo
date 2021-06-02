import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		paddingBottom: 20,
		backgroundColor: '#483D8B',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#EEE5DE',
	},
	
});

export default Header

//const styles = StyleSheet.create({});