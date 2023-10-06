import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Eventos from "../eventos/Index";
import Participantes from "../participantes/Index";

export default function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/participantes" element={<Participantes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}