import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./layouts/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/inicio" element={<div>Inicio</div>} />
          <Route path="/dashboard/videos" element={<div>Videos</div>} />
          <Route path="/dashboard/imagenes" element={<div>Imágenes</div>} />
          <Route path="/dashboard/usuarios" element={<div>Usuarios</div>} />
          <Route path="/dashboard/roles" element={<div>Roles</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
