import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import { login } from "../../services/login";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password)
            .then(res => {
                localStorage.setItem("token", res.token);
                navigate("/users")
            })
            .catch(() => setErrorMessage("Invalid email or password."));
    
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "2%" }}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Type your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button style={{marginTop: "10px"}} variant="primary" type="submit" block>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
