import { Droppable } from "react-beautiful-dnd";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentBar from "./components/ContentBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentBar />
    </div>
  );
}

export default App;
