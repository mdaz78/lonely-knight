import { Knight } from './components/Knight';
import { Square } from './components/Square';

function App() {
  return (
    <div className='App'>
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}

export default App;
