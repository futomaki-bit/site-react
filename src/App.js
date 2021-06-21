import './css/App.css';
import about from './About.js';
import cover from './Cover.js';
import programming from './Programming.js'
import smartphone from './Smartphone.js'
import food from './Food.js'
import github from './Github.js'
import notes from './Notes.js'

function App() {
  return (
    <div class="grandparent fade-in scrollable">
      {cover}
      {about}
      {programming}
      {smartphone}
      {food}
      {github}
      {notes}
    </div>
  );
}

export default App;
