import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Insert Hello component Here */}

        {/* Make this components */}
        <div>
          <div className="board-row">
            <button className="square">1</button>
            <button className="square">2</button>
            <button className="square">3</button>
          </div>
          <div className="board-row">
            <button className="square">4</button>
            <button className="square">5</button>
            <button className="square">6</button>
          </div>
          <div className="board-row">
            <button className="square">7</button>
            <button className="square">8</button>
            <button className="square">9</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
