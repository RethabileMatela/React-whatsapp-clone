import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/chatpage" element={<ChatPage></ChatPage>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
