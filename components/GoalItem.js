import {
    StyleSheet,
    View,
    Text
} from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>
                {props.text}
            </Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
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