import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" />
      </Routes>
    </div>
  );
}

export default App;
