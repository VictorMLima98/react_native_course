import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	StyleSheet,
	Button,
	Text,
	TextInput,
	View,
	FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
	const [newGoal, setNewGoal] = useState('');
	const [goals, setGoals] = useState([]);

	function goalInputHandler(text) {
		setNewGoal(text);
	};

	function addGoalHandler() {
		setGoals(currentGoals => [
			...currentGoals,
			{
				id: Math.random().toString(),
				text: newGoal
			}
		]);
	};

	return (
		<View style={
			styles.appContainer
		}>
			<StatusBar
				style='auto' />

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
				<FlatList
					data={goals}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					renderItem={(goalsData) => {
						return <GoalItem text={goalsData.item.text} />;
					}}
					keyboardDismissMode='on-drag'
					alwaysBounceVertical={false} />
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
		flex: 1,
	},
});
