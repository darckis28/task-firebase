import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        >
          <Route
            path="home"
            element={<Home />}
          />
          <Route
            path="tasks"
            element={<Tasks />}
          />
          <Route
            path="create"
            element={<Tasks />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
