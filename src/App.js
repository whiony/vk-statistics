import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
