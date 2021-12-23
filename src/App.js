import './App.css';
import React from 'react'
import AddForm from './Components/AddForm'
import NotesList from './Components/NotesList'
import { nanoid } from 'nanoid'

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    this.loadNotes()
  }

  loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.json())
      .then(notes => {this.setState({notes: notes})});
  }

  handleRemove = (noteId) => {
    fetch(process.env.REACT_APP_NOTES_URL+'/'+noteId, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then(res=> res.text())
      .then(text => console.log(text))
      .then(() => this.loadNotes());
  }

  postNote = (note) => {
    let noteObj = {
      id: nanoid(),
      content: note
    }
    let jsonString = JSON.stringify(noteObj);
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: jsonString
    }).then(res=> res.text())
      .then(text => console.log(text))
      .then(() => this.loadNotes());
  }

  render() {
    return(
    <div className="App">
      <AddForm postNote={this.postNote}/>
      <NotesList notes={this.state.notes} handleRemove={this.handleRemove} loadNotes={this.loadNotes}/>
    </div>
  );}
}

export default App;
