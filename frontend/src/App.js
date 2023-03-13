import { Route, Routes } from "react-router-dom";
import Events from "./components/Events/Events";
import Teams from "./components/Teams/Teams";
import Tasks from "./components/Tasks/Tasks";
import UserDetails from "./components/UserDetails/UserDetails";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/users" element={<UserDetails />} />
      </Routes>
    </div>

  );
}

export default App;
