import './App.css';

function App() {

    const handleTistoryAuth = () => {
        alert('인증')
    }

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={handleTistoryAuth}>티스토리 인증</button>
      </header>
    </div>
  );
}

export default App;
