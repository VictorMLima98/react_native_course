import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={
			styles.container
		}>
			<StatusBar style='auto' />

			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Add a Goal..." />
				<Button title="Add" />
			</View>

			<View>
				<Text>Your goals so far:</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 34,
		paddingHorizontal: 8
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: 'center',
		marginBottom: 8
	},

	textInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 6,
		marginRight: 8,
		padding: 8
	}
});
