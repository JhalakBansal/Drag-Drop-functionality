import logo from './logo.svg';
import './App.css';
import { DragableNotes } from './dragable components/dragableNotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       This is a dummy for Drag and Drop Components similar to jira
       <DragableNotes/>
      </header>
    </div>
  );
}

export default App;
