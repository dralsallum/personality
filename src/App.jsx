import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useSelector } from "react-redux";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Something from "./pages/Something";
import Policy from "./pages/Policy";
import Personal from "./pages/personal";
import Outcome from "./pages/Outcome";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personality" element={<Personal />} />
        <Route path="/outcome" element={<Outcome />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/main" element={<Something />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
};

export default App;
