import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} />}
    />
  );
};

export default NoteList;
