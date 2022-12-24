import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';

function GoalInput(props) {
    const [newGoal, setNewGoal] = useState('');

    function goalInputHandler(text) {
		setNewGoal(text);
	};

    function addGoalHandler() {
        props.onAddGoal(newGoal);

        setNewGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.goalInput}
                placeholder="Add a Goal..."
                onChangeText={goalInputHandler}
                value={newGoal} />

            <Button title="Add" onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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
});