import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={
			styles.appContainer
		}>
			<StatusBar style='auto' />

			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Add a Goal..." />

				<Button title="Add" />
			</View>

			<View style={styles.listContainer}>
				<Text>Your goals so far:</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 16
	},

	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},

	textInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 6,
		marginRight: 8,
		padding: 8
	},

	listContainer: {
		flex: 8,
	}
});
