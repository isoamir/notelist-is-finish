import Note from "./Note";

function NoteList({ notes, onDelete }) {
  return (
    <div>
      
      { notes == ""  ? <p>your note list is empty</p> : null}
      {notes.map((item) => (
        <Note key={item.id} data={item} onDelete={onDelete} />
      ))}
    </div>
  );
}
export default NoteList;
