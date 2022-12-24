import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
    KeyboardAvoidingView
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
        <Modal visible={props.visible} animationType="fade" >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.modalContainer}
            >
                <Image 
                    style={styles.image}
                    source={require('../assets/images/goal.png')} 
                />

                <TextInput
                    style={styles.goalInput}
                    placeholder="Add a Goal..."
                    placeholderTextColor={'#f4d9b4'}
                    onChangeText={goalInputHandler}
                    value={newGoal} 
                />

                {/* Style this later!! */}
                <View style={styles.buttonsContainer}>
                    <View style={{ 
                        marginRight: 8
                    }}>
                        <Button 
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>

                    <View>
                        <Button 
                            title="Add"
                            onPress={addGoalHandler}
                            
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        backgroundColor: '#6f361f'
	},

    goalInput: {
		borderWidth: 1,
		borderColor: '#faedda',
		borderRadius: 6,
		padding: 8,
		fontSize: 16,
        width: '100%',
        color: '#faedda',
	},

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 16
    },

    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});