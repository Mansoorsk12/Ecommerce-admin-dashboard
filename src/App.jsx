import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "rahul@gmail.com" && password === "12345678") {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  if (loggedIn) {
    return (
      <div className="dashboard">
        <div className="header">
          <h1>Dashboard</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>

        <div className="stats">
          <div className="card revenue">
            <p>Total Revenues</p>
            <h2>$2,129,430</h2>
          </div>

          <div className="card transactions">
            <p>Total Transactions</p>
            <h2>1,520</h2>
          </div>
        </div>

        <div className="products">
          <div className="product-header">
            <h2>Top products</h2>
            <span>See All</span>
          </div>

          <div className="product">
            <span>Basic Tees</span>
            <b>55%</b>
          </div>

          <div className="product">
            <span>Custom Short Pants</span>
            <b>31%</b>
          </div>

          <div className="product">
            <span>Super Hoodies</span>
            <b>14%</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="brand">
          <h1>Board.</h1>
        </div>

        <div className="login-form">
          <h1>Sign In</h1>
          <p>Sign in to your account</p>

          <form onSubmit={handleLogin}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot">Forgot password?</div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;