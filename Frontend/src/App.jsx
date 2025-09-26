import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";

function App() {
  return (
    <div className="App">
      {/* Navigation for demo purposes */}
      <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4">
        <div className="flex gap-2">
          <Link
            to="/"
            className="px-3 py-1 text-xs rounded cursor-pointer transition-all primary-50 text-white"
          >
            Landing
          </Link>
          <Link
            to="/signin"
            className="px-3 py-1 text-xs rounded cursor-pointer transition-all primary-50 text-white"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1 text-xs rounded cursor-pointer transition-all primary-50 text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/dashboard"
            className="px-3 py-1 text-xs rounded cursor-pointer transition-all primary-50 text-white"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard2"
            className="px-3 py-1 text-xs rounded cursor-pointer transition-all primary-50 text-white"
          >
            Dashboard 2
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </div>
  );
}

export default App;
