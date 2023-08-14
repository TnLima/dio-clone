import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index";
import Cadastro from "./pages/cadastro/index";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter hashType="hashbang">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
