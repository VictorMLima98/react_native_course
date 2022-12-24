import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(newGoal) {
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

			<GoalInput onAddGoal={addGoalHandler} />

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

	goalsLabelContainer: {
		marginBottom: 16,
	},

	goalsContainer: {
		marginBottom: 1,
		flex: 1,
	},
});
