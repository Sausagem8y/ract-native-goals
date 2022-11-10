import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#a33" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 3,
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  goalText: {
    color: "#eee",
    fontSize: 18,
    padding: 5,
  },
});
