import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";
import "./assets/scss/style.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home Page</h1>
              <p>Welcome to the home page!</p>
              <button onClick={() => setCount(count + 1)}>
                Count: {count}
              </button>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
