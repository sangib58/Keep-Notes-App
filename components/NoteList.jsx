import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <NoteItem note={item} onDelete={onDelete} onEdit={onEdit} />
      )}
    />
  );
};

export default NoteList;
