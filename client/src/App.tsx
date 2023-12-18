import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./layouts/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<div>Main</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
