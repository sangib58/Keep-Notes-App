import { Text, View, StyleSheet } from "react-native";

const NoteItem = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{note.title}</Text>
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
});

export default NoteItem;
