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

			<View style={styles.goalsLabelContainer}>
				<Text style={{
					fontSize: 20
				}}>
					Your goals
				</Text>
			</View>

			<View style={styles.goalsContainer}>

				{goals.map((goal, index) => (
					<View key={index} style={styles.goalItem}>
						<Text style={styles.goalText}>
							{goal}
						</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 32,
		paddingHorizontal: 16
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},

	goalsLabelContainer: {
		marginBottom: 16,
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
		marginBottom: 1,
	},

	goalItem: {
		paddingVertical: 24,
		paddingHorizontal: 12,
		marginVertical: 4,
		backgroundColor: '#eab676',
		borderRadius: 8,
	},

	goalText: {
		fontSize: 20
	}
});
