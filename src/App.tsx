import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Queue from "./components/Queue/Queue";
import SideNavbar from "./common/SideNavbar/SideNavbar";
import Header from "./common/Header/Header";

function App() {
  return (
    <div className="grid grid-cols-12">
      <BrowserRouter>
        <div className="col-span-0 md:col-span-3 lg:col-span-2">
          <SideNavbar />
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/queue" />} />
            <Route path="/queue" element={<Queue />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
