import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api/Api";
import "../App.css"

function Login() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await loginUser(id, email);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Invalid ID or Email. Please try again.");
    }
  };

  return (
      <div className="login-card-wrap">
  <div className="login-card">
    <div className="lock-container">
      <div className="lock-badge">
        <span>🔒</span>
      </div>
    </div>

    <h2 className="login-title">Welcome Please Login 👋</h2>

<br />
    {error && <div className="error">{error}</div>}

    <form onSubmit={handleLogin}>
      <div className="field">
        <label>User ID</label>
        <input
          type="text"
          placeholder="Enter your ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn">Login</button>
    </form>

    <div className="divider">
      <div className="line"></div>
      <span>or</span>
      <div className="line"></div>
    </div>

    <p className="demo">
      <span className="demo-label">Demo Credentials</span>
      ID: <span>1</span> | Email: <span>Sincere@april.biz</span>
    </p>
  </div>
</div>
  );
}

export default Login;
