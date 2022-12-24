import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	Pressable
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [showModal, toggleModal] = useState(false);
	const [goals, setGoals] = useState([]);

	function startAddGoalHandler() {
		toggleModal(true);
	}

	function addGoalHandler(newGoal) {
		setGoals(currentGoals => [
			...currentGoals,
			{
				id: Date.now().toString(),
				text: newGoal
			}
		]);
	};

	function deleteGoalHandler(id) {
		setGoals(goals => {
			return goals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<View style={
			styles.appContainer
		}>
			<StatusBar
				style='auto' />

			<GoalInput visible={showModal} onAddGoal={addGoalHandler} />

			<View style={styles.goalsLabelContainer}>
				<Text style={{
					fontSize: 24,
					color: '#6f361f'
				}}>
					Your goals for 2023
				</Text>
			</View>

			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					renderItem={(goalsData) => {
						return <GoalItem 
							id={goalsData.item.id}
							text={goalsData.item.text}
							onDeleteItem={deleteGoalHandler} />;
					}}
					keyboardDismissMode='on-drag'
					alwaysBounceVertical={false} />
			</View>

			<View style={styles.addGoalButtonParent}>
				<Pressable
						onPress={startAddGoalHandler}
						style={({pressed}) => pressed && styles.pressedGoalButton}
					>
					<View style={styles.addGoalButton}>
						<Text style={styles.goalButtonLabel}>
							+
						</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: '#faedda',
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

	addGoalButtonParent: {
		position: 'absolute',
		bottom: 16,
		right: 16,
	},

	addGoalButton: {
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 4,
		borderRadius: 100,
		backgroundColor: '#894023',
	},

	goalButtonLabel: {
		fontSize: 36,
		color: '#fdf8ef',
	},

	pressedGoalButton: {
		opacity: 0.4,
	}
});
