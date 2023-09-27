import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/chatpage" element={<h1>Chat Page</h1>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
