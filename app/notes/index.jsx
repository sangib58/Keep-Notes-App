import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note One" },
    { id: 2, title: "Note Two" },
    { id: 3, title: "Note Three" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  //add note
  const addNote = () => {
    if (newNote.trim() === "") {
      return;
    }
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), title: newNote }]);
    setModalVisible(false);
    setNewNote("");
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity style={styles.addButton}>
        <Text
          style={styles.addButtonText}
          onPress={() => setModalVisible(true)}
        >
          +Add Note
        </Text>
      </TouchableOpacity>
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NoteScreen;
