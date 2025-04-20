import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{note.text}</Text>
      <TouchableOpacity onPress={() => onDelete(note.$id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
  },
  delete: {
    fontSize: 12,
    color: "red",
  },
});

export default NoteItem;
