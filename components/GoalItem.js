import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';

function GoalItem(props) {
    return (
        <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		marginVertical: 4,
		backgroundColor: '#eab676',
		borderRadius: 8,
        paddingVertical: 24,
		paddingHorizontal: 12,
	},

    pressedItem: {
        opacity: 0.4,
    },

	goalText: {
		fontSize: 20,
	}
});