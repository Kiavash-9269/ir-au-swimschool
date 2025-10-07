import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// صفحه Home ساده برای تست
const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">خوش آمدید به مدرسه شنا ایران استرالیا</h1>
      <p>این صفحه Home برای تست Navbar و ساختار اولیه است.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* صفحات بعدی: About, Contact, Auth */}
      </Routes>
    </Router>
  );
}

export default App;
