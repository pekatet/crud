import '../App.css';
import React, {useState} from 'react';

function AddForm ({ postNote }) {
  const [note, setNote] = useState('')

  function submitHandle (e) {
    e.preventDefault();
    postNote(note)
    setNote('')
  }
  const handleChange = ({target}) => {
    setNote(target.value);
  }

  return (
    <form className="add-form" onSubmit={submitHandle}>
      <p>
        <label>Новая заметка</label>
        <br/>
        <textarea className="note-field" id="name" name="name" value={note} onChange={handleChange}/>
      </p>
      <button  className="add-button" type="submit">Добавить</button>
    </form>
  )
}

export default AddForm;