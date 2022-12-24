import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    Modal,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        placeholder="O que você planeja realizar em 2023?"
                        placeholderTextColor={'#f4d9b4'}
                        onChangeText={goalInputHandler}
                        value={newGoal}
                        enablesReturnKeyAutomatically={true}
                    />

                    {/* Style this later!! */}
                    <View style={styles.buttonsContainer}>
                        <View style={{ 
                            marginRight: 8
                        }}>
                            <Button 
                                title="Cancelar"
                                onPress={props.onCancel}
                            />
                        </View>

                        <View>
                            <Button 
                                title="Adicionar"
                                onPress={addGoalHandler}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
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
        backgroundColor: '#e49a53'
	},

    goalInput: {
		borderWidth: 1,
		borderColor: '#fdf8ef',
		borderRadius: 6,
		padding: 8,
		fontSize: 16,
        width: '100%',
        color: '#fdf8ef',
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