import ScanQr from "./screens/qrScan/ScanQr";
import "./App.css";
import logo from "./Images/logo.png";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import BasicTable from "./screens/questions";
import Login from "./screens/login";

function App() {
  return (
    <div className="App">
      <img src={logo} className="img" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/scanQr" element={<ScanQr />} />
          <Route path="/questions" element={<BasicTable />} />
        </Routes>
      </BrowserRouter>
      {/* <ScanQr /> */}
    </div>
  );
}

export default App;
