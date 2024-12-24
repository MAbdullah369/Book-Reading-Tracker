import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:8080/Register", {
                username,
                password,
            });
            alert(response.data.message);
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Register;
