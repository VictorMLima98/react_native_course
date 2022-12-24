import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
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
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.goalInput}
                    placeholder="Add a Goal..."
                    onChangeText={goalInputHandler}
                    value={newGoal} 
                />

                <View style={styles.buttonsContainer}>
                    <View style={{ 
                        marginRight: 8
                     }}>
                        <Button title="Cancel" />
                    </View>

                    <View>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
	},

    goalInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 6,
		padding: 8,
		fontSize: 16,
        width: '100%',
	},

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 16
    }
});