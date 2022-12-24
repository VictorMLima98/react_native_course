import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
	const [newGoal, setNewGoal] = useState('');
	const [goals, setGoals] = useState([]);

	function goalInputHandler(text) {
		setNewGoal(text);
	};

	function addGoalHandler() {
		setGoals(currentGoals => [
			...currentGoals,
			newGoal
		]);
	};

	return (
		<View style={
			styles.appContainer
		}>
			<StatusBar style='auto' />

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.goalInput}
					placeholder="Add a Goal..."
					onChangeText={goalInputHandler} />

				<Button title="Add" onPress={addGoalHandler} />
			</View>

			<View style={styles.goalsContainer}>
				<Text style={{
					fontSize: 20,
					marginBottom: 8
				}}>Your goals so far:</Text>
				{goals.map((goal, index) => <Text style={styles.goalItem} key={index}>{goal}</Text>)}
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
	},

	goalInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 6,
		marginRight: 8,
		padding: 8,
		fontSize: 16,
	},

	goalsContainer: {
		flex: 10,
	},

	goalItem: {
		paddingVertical: 24,
		marginVertical: 3,
		backgroundColor: '#eee',
		fontSize: 16
	}
});
