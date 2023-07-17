import Home from "./pages/Home";
import Detail from "./pages/Detail";
import IndexDetail from "./components/Detail/Left/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/indexDetail" element={<IndexDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
