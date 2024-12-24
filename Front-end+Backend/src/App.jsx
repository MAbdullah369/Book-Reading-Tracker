import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home/Home.jsx";
const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
